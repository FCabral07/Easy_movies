import App from "../Config/firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import Toast from "react-native-tiny-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Conectando ao firestore (db), e puxando a função de autenticar
const firestore = getFirestore(App);
const auth = getAuth(App);

// Serviços disponíveis com o firebase
const FirebaseService = {
  // Função para achar todos os usuários
  findAll: async (collectionName: string) => {
    // Pegando a collection
    const column = await collection(firestore, collectionName);
    // Pegando os docs
    const snapshot = await getDocs(column);
    // Transformando em um json usável
    const docList = await snapshot.docs.map((doc) => doc.data());

    return docList;
  },
  // Buscando um único usuário
  findUser: async (email: string) => {
    try {
      // Pegando a collection e fazendo uma query em busca do email com esse valor
      const collectionRef = collection(firestore, "Users");
      const querySnapshot = await getDocs(
        query(collectionRef, where("email", "==", email))
      );

      // Se a query nao estiver vazia, atribui o usuario com o email
      if (!querySnapshot.empty) {
        const documentSnapshot = querySnapshot.docs[0];
        const data = documentSnapshot.data();
        return data;
      } else {
        // Não encontrado
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar documento:", error);
      return null; // Retorna null em caso de erro
    }
  },
  findMovie: async () => {
    try {
      // Buscando o email no asyncstorage
      const userEmail = (await AsyncStorage.getItem("userEmail"))
        .replace(/['"]+/g, "")
        .trim();

      // Pegando a collection e fazendo uma query em busca do email com esse valor
      const collectionRef = collection(firestore, "Users");
      const querySnapshot = await getDocs(
        query(collectionRef, where("email", "==", userEmail))
      );

      // Se a query não estiver vazia e encontrar documentos correspondentes
      if (!querySnapshot.empty) {
        // Acessa o primeiro documento encontrado
        const documentSnapshot = querySnapshot.docs[0];
        // Obtém a referência do documento
        const userDocRef = doc(firestore, "Users", documentSnapshot.id);

        // Obtém os dados do documento
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          // Retorna os valores de 'favoritesMovies' do documento
          const favoritesMovies = docSnapshot.data().favoritesMovies;
          // console.log('Valores de favoritesMovies:', favoritesMovies);
          return favoritesMovies;
        } else {
          console.log("Nenhum documento encontrado para o email:", userEmail);
          return null;
        }
      } else {
        console.log("Nenhum documento encontrado para o email:", userEmail);
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar documento:", error);
      return null; // Retorna null em caso de erro
    }
  },
  // Salvando a requisição dos novos usuários (email, nome, username)
  save: async (collectionName: string, data: any, username: string) => {
    try {
      // Buscando os docs
      const snapshot = await getDocs(collection(firestore, "Users"));
      // Mapeando os usuários
      const users = snapshot.docs.map((doc) => doc.data());
      // Verificando se já há algum usuário com esse username
      if (users.some((user) => user.username === username)) {
        return true;
      } else {
        // Se não houver, salva o usuário sem a sua senha por motivos de segurança
        return await addDoc(collection(firestore, collectionName), data);
      }
    } catch (err) {
      console.log("Erro ao salvar o usuário: ", err);
    }
  },
  saveMovie: async (movieData: any) => {
    try {
      // Buscando o email no asyncstorage
      const userEmail = (await AsyncStorage.getItem("userEmail"))
        .replace(/['"]+/g, "")
        .trim();

      // Pegando a collection e fazendo uma query em busca do email com esse valor
      const collectionRef = collection(firestore, "Users");
      const querySnapshot = await getDocs(
        query(collectionRef, where("email", "==", userEmail))
      );

      // Se a query não estiver vazia e encontrar documentos correspondentes
      if (!querySnapshot.empty) {
        // Acessa o primeiro documento encontrado
        const documentSnapshot = querySnapshot.docs[0];
        // Obtém a referência do documento
        const userDocRef = doc(firestore, "Users", documentSnapshot.id);

        // Atualiza os dados do documento usando a referência
        await updateDoc(userDocRef, {
          favoritesMovies: movieData,
        });

        console.log("Filme salvo com sucesso no documento do usuário!");
      } else {
        console.log("Nenhum documento encontrado para o email:", userEmail);
      }
    } catch (error) {
      console.error("Erro ao buscar documento:", error);
      return null; // Retorna null em caso de erro
    }
  },
  removeMovie: async (movieIdToRemove: any) => {
    try {
      const userEmail = (await AsyncStorage.getItem("userEmail"))
        .replace(/['"]+/g, "")
        .trim();

      const collectionRef = collection(firestore, "Users");
      const querySnapshot = await getDocs(
        query(collectionRef, where("email", "==", userEmail))
      );

      if (!querySnapshot.empty) {
        const documentSnapshot = querySnapshot.docs[0];
        const userDocRef = doc(firestore, "Users", documentSnapshot.id);

        const userData = documentSnapshot.data();
        const favoritesMovies = userData.favoritesMovies || [];

        // Remove o movieIdToRemove da lista de favoritos
        const updatedFavorites = favoritesMovies.filter(
          (movieId) => movieId !== movieIdToRemove
        );

        // Atualiza o documento com a lista de favoritos atualizada
        await updateDoc(userDocRef, {
          favoritesMovies: updatedFavorites,
        });

        console.log("ID removido da lista de favoritos com sucesso!");
      } else {
        console.log("Nenhum documento encontrado para o email:", userEmail);
      }
    } catch (err) {
      console.error("Erro ao remover ID da lista de favoritos:", err);
    }
  },
  // Procurando na lista dos favoritesMovies:
  getFavoritesMovies: async (email) => {
    try {
      const userRef = collection(firestore, "Users");
      const querySnapshot = await getDocs(
        query(userRef, where("email", "==", email))
      );

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const favoritesMovies = userData.favoritesMovies || [];
        return favoritesMovies;
      } else {
        console.log("Nenhum documento encontrado para o email:", email);
        return [];
      }
    } catch (error) {
      console.error("Erro ao obter favoritesMovies:", error);
      throw error;
    }
  },
  // Atualizando email/senha do usuário
  updateUser: async (newEmail: string, newPassword: string) => {
    try {
      if (newEmail) {
        await updateEmail(auth.currentUser, newEmail);

        // Atualiza o e-mail no AsyncStorage
        await AsyncStorage.setItem("userEmail", newEmail);
      }

      if (newPassword !== null && newPassword !== "") {
        await updatePassword(auth.currentUser, newPassword);
      }
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      return false;
    }
  },
  // Atualizando nome do usuário
  updateUserName: async (email: string, newName: string) => {
    try {
      // Buscando a collection e fazendo a query para achar o user
      const usersCollection = collection(firestore, "Users");
      const userQuery = query(usersCollection, where("email", "==", email));
      const querySnapshot = await getDocs(userQuery);

      // Se não tiver vazio a query ele aplica a atualização
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userRef = doc(firestore, "Users", userDoc.id);

        await updateDoc(userRef, { user: newName });
        return true; // Sucesso ao atualizar o nome
      } else {
        return false; // Usuário não encontrado
      }
    } catch (error) {
      console.error("Erro ao atualizar nome do usuário:", error);
      return false; // Retorna falso em caso de erro
    }
  },
  delete: async (username: string) => {
    try {
      // Onde os docs estão armazenados
      const usersCollection = collection(firestore, "Users");

      // Consulta baseado no username
      const search = query(usersCollection, where("username", "==", username));

      // Obtendo os docs da consulta
      const querySnapshot = await getDocs(search);

      // Verificando se há algum username com esse nome
      if (!querySnapshot.empty) {
        const documentSnapshot = querySnapshot.docs[0];
        const documentRef = doc(firestore, "Users", documentSnapshot.id);

        // Deleta o doc
        await deleteDoc(documentRef);
      }
    } catch (err) {
      console.error("Erro ao excluir o documento", err);
    }
  },
  // Função de login
  login: (email: string, password: string) => {
    // Função que loga o usuário
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        // return user;
      })
      .catch((error) => {
        // Pegando os erros e retornando
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage, errorCode);
      });
  },
  // Função de deslogar
  signOut: async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.error("Erro ao fazer logout: ", err);
    }
  },
  // Função de criar usuário
  createUser: (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      // Criando o usuário novo
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          resolve(user);
        })
        .catch((error) => {
          // Recebendo as mensagens de erro
          const errorCode = error.code;
          const errorMessage = error.message;

          // Tratamento dos erros mais comuns do auth/firebase (segundo a net):
          if (error.code === "auth/invalid-email") {
            Toast.show("Email inválido", {
              position: Toast.position.TOP,
              containerStyle: {
                backgroundColor: "red",
                borderRadius: 15,
              },
              textStyle: {
                color: "white",
              },
            });
            return console.log(errorMessage);
          } else if (error.code === "auth/weak-password") {
            Toast.show("Senha fraca, use mais de 6 digitos.", {
              position: Toast.position.TOP,
              containerStyle: {
                backgroundColor: "red",
                borderRadius: 15,
              },
              textStyle: {
                color: "white",
              },
            });
            return console.log(errorMessage);
          } else if (error.code === "auth/email-already-in-use") {
            Toast.show("Email já em uso", {
              position: Toast.position.TOP,
              containerStyle: {
                backgroundColor: "red",
                borderRadius: 15,
              },
              textStyle: {
                color: "white",
              },
            });
            return console.log(errorMessage);
          } else if (error.code === "auth/operation-not-allowed") {
            Toast.show("Operação não permitido.", {
              position: Toast.position.TOP,
              containerStyle: {
                backgroundColor: "red",
                borderRadius: 15,
              },
              textStyle: {
                color: "white",
              },
            });
            return console.log(errorMessage);
          } else if (error.code === "auth/network-request-failed") {
            Toast.show("Internet não conectada.", {
              position: Toast.position.TOP,
              containerStyle: {
                backgroundColor: "red",
                borderRadius: 15,
              },
              textStyle: {
                color: "white",
              },
            });
            return console.log(errorMessage);
          } else {
            console.error("Erro ao criar usuário:", errorCode);
            Toast.show("Unknown error.", {
              position: Toast.position.TOP,
              containerStyle: {
                backgroundColor: "red",
                borderRadius: 15,
              },
              textStyle: {
                color: "white",
              },
            });
            return console.log(errorMessage);
          }
        });
    });
  },
  // Function to create a comment
  createComment: async (userName: string, comment: string) => {
    try {
      // Get a reference to the 'comments' collection
      const commentsCollection = collection(firestore, "comments");

      // Add a new document with the provided data
      const newCommentDoc = await addDoc(commentsCollection, {
        username: userName,
        comment: comment,
        timestamp: new Date(), // You can add a timestamp to the comment if needed
      });

      console.log("Comment added successfully:", newCommentDoc.id);
      return newCommentDoc.id; // Return the ID of the newly created comment
    } catch (error) {
      console.error("Error creating comment:", error);
      return null; // Return null in case of an error
    }
  },
  getAllComments: async () => {
    try {
      // Get a reference to the 'comments' collection
      const commentsCollection = collection(firestore, "comments");

      // Get all documents from the 'comments' collection
      const snapshot = await getDocs(commentsCollection);

      // Transform the snapshot into an array of comment data
      const comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return comments;
    } catch (error) {
      console.error("Error retrieving comments:", error);
      return null; // Return null in case of an error
    }
  },
};

export default FirebaseService;
