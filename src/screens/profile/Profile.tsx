import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native"
import perfil from "../../../assets/perfil.png"
import { useNavigation } from "@react-navigation/native";
import ComponentBar from "../../components/componentBar/ComponentBar";
import * as S from './Styles'
import FirebaseService from "../../../backend/services/firebaseService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetFavoritesMovies } from "../../components/favorites/Favorites";

// Criando a página home
const Profile = (): JSX.Element => {
    // Informações do usuário
    const [userDetails, setUserDetails] = useState<any>(null);

    // Definindo constantes para navegação
    const navigation = useNavigation();

    const handleEditAccount = () => {
        navigation.navigate("Edit");
    };

    const handleLogoutClick = async () => {
        // Apagando o userEmail do AsyncStorage
        await AsyncStorage.removeItem('userEmail');

        // Deslogando o usuário
        await FirebaseService.signOut();

        // Redefinindo o favoritesMovies
        resetFavoritesMovies();

        // Levando de volta a tela de login
        navigation.navigate("Login");
    };

    // Buscando e setando os detalhes do usuário
    const fetchUserDetails = async () => {
        try {
          // Obtendo o email do AsyncStorage
          const userEmail = (await AsyncStorage.getItem('userEmail')).replace(/['"]+/g, '').trim();
      
          if (userEmail) {
            // Busca os detalhes do usuário com base no email
            const user = await FirebaseService.findUser(userEmail);
      
            // Verifica se o usuário retornado não é nulo antes de acessar as propriedades
            if (user) {
              // Define os detalhes do usuário no useState acima
              setUserDetails(user);
            }
          }
        } catch (err) {
          console.error(err);
        }
      };

    // Recuperando as informações do AsyncStorage
    useEffect(() => {
        // Chama a função para poder funcionar
        fetchUserDetails();
      }, []);

      console.log('USER: ', userDetails);

    return (
        <>
            <S.Container>
                <S.ContainerPerfil>
                    <S.ContainerImage>
                        <S.Image source={perfil} />
                    </S.ContainerImage>
                    <S.TextName>{userDetails ? userDetails.user : 'Carregando...'}</S.TextName>
                </S.ContainerPerfil>
                <S.ContainerButton>
                    <S.ContainerButtonEdit onPress={handleEditAccount}>
                        <S.TextNameBold >
                            Editar perfil
                        </S.TextNameBold>
                    </S.ContainerButtonEdit>
                </S.ContainerButton>
                <S.ContainerInfo>
                    <S.TextNameBold>Minhas informações</S.TextNameBold>
                    <S.Line></S.Line>
                </S.ContainerInfo>
                <S.ContainerUserData>
                    <S.ItalicText>
                        <S.TextNameBold>Username:</S.TextNameBold> {userDetails ? userDetails.username : 'Carregando...'}
                    </S.ItalicText>
                    <S.ItalicText>
                        <S.TextNameBold>Email:</S.TextNameBold> {userDetails ? userDetails.email : 'Carregando...'}
                    </S.ItalicText>
                    <S.ItalicText>
                        <S.TextNameBold>Nome:</S.TextNameBold> {userDetails ? userDetails.user : 'Carregando...'}
                    </S.ItalicText>
                    <S.ContainerButtonExit>
                        <S.ButtonExit onPress={handleLogoutClick}>
                            <S.TextNameBold>
                                Sair
                            </S.TextNameBold>
                        </S.ButtonExit>
                    </S.ContainerButtonExit>
                </S.ContainerUserData>
            </S.Container>
            <ComponentBar />
        </>
    );
};

export default Profile;