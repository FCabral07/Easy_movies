import App from "../Config/firebaseConfig";
import { getFirestore, collection, getDocs, addDoc, query, where, doc, deleteDoc } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Toast from "react-native-tiny-toast";

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
        const docList = await snapshot.docs.map(doc => doc.data());

        return docList;
    },
    // Salvando a requisição dos novos usuários (email, nome, username)
    save: async (collectionName: string, data: any, username: string) => {
        try {
            // Buscando os docs
            const snapshot = await getDocs(collection(firestore, 'Users'));
            // Mapeando os usuários
            const users = snapshot.docs.map(doc => doc.data());
            // Verificando se já há algum usuário com esse username
            if (users.some(user => user.username === username)) {
                return true;
            } else {
                // Se não houver, salva o usuário sem a sua senha por motivos de segurança
                return await addDoc(collection(firestore, collectionName), data);
            }
        } catch (err) {
            console.log('Erro ao salvar o usuário: ', err)
        }
    },
    delete: async (username: string) => {
        try {
            // Onde os docs estão armazenados
            const usersCollection = collection(firestore, 'Users');

            // Consulta baseado no username
            const search = query(usersCollection, where('username', '==', username));

            // Obtendo os docs da consulta
            const querySnapshot = await getDocs(search);

            // Verificando se há algum username com esse nome
            if (!querySnapshot.empty) {
                const documentSnapshot = querySnapshot.docs[0];
                const documentRef = doc(firestore, 'Users', documentSnapshot.id);

                // Deleta o doc
                await deleteDoc(documentRef);
            }
        } catch (err) {
            console.error('Erro ao excluir o documento', err)
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
                    if (error.code === 'auth/invalid-email') {
                        Toast.show('Email inválido', {
                            position: Toast.position.TOP,
                            containerStyle: {
                                backgroundColor: 'red',
                                borderRadius: 15
                            },
                            textStyle: {
                                color: 'white',
                            },
                        });
                        return console.log(errorMessage);
                    } else if (error.code === 'auth/weak-password') {
                        Toast.show('Senha fraca, use mais de 6 digitos.', {
                            position: Toast.position.TOP,
                            containerStyle: {
                                backgroundColor: 'red',
                                borderRadius: 15
                            },
                            textStyle: {
                                color: 'white',
                            },
                        });
                        return console.log(errorMessage);
                    } else if (error.code === 'auth/email-already-in-use') {
                        Toast.show('Email já em uso', {
                            position: Toast.position.TOP,
                            containerStyle: {
                                backgroundColor: 'red',
                                borderRadius: 15
                            },
                            textStyle: {
                                color: 'white',
                            },
                        });
                        return console.log(errorMessage);
                    } else if (error.code === 'auth/operation-not-allowed') {
                        Toast.show('Operação não permitido.', {
                            position: Toast.position.TOP,
                            containerStyle: {
                                backgroundColor: 'red',
                                borderRadius: 15
                            },
                            textStyle: {
                                color: 'white',
                            },
                        });
                        return console.log(errorMessage);
                    } else if (error.code === 'auth/network-request-failed') {
                        Toast.show('Internet não conectada.', {
                            position: Toast.position.TOP,
                            containerStyle: {
                                backgroundColor: 'red',
                                borderRadius: 15
                            },
                            textStyle: {
                                color: 'white',
                            },
                        });
                        return console.log(errorMessage);
                    } else {
                        console.error('Erro ao criar usuário:', errorCode);
                        Toast.show('Unknown error.', {
                            position: Toast.position.TOP,
                            containerStyle: {
                                backgroundColor: 'red',
                                borderRadius: 15
                            },
                            textStyle: {
                                color: 'white',
                            },
                        });
                        return console.log(errorMessage);
                    }
                });
        });
    }
};

export default FirebaseService;