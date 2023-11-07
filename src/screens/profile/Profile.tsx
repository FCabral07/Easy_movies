import React from "react";
import { StyleSheet } from "react-native"
import perfil from "../../../assets/perfil.png"
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import ComponentBar from "../../components/componentBar/ComponentBar";
import * as S from './Styles'

// Criando a página home
const Profile = (): JSX.Element => {
  // Definindo constantes para navegação
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount" as never);
  };

  const handleIconClick = () => {
    navigation.navigate("JoinNow" as never);
  };

  const handleLoginClick = () => {
    navigation.navigate("Home" as never);
  };

  return (
    <LinearGradient
            // Background Linear Gradient
            colors={['#010103', '#2f405a']}
            style={styles.linearGradient}
        >
            <S.ContainerPerfil>
                <S.ContainerImage>
                    <S.Image source={perfil} />
                </S.ContainerImage>
                <S.TextName>Weslley</S.TextName>
            </S.ContainerPerfil>
            <S.ContainerButton>
                <S.ContainerButtonEdit>
                    <S.TextName>
                        Editar perfil
                    </S.TextName>
                </S.ContainerButtonEdit>
            </S.ContainerButton>
            <S.ContainerInfo>
                <S.TextNameBold>Minhas informações</S.TextNameBold>
                <S.Line></S.Line>
            </S.ContainerInfo>
            <S.ContainerUserData>
                <S.ItalicText>
                    <S.TextNameBold>Nome:</S.TextNameBold> Weslley
                </S.ItalicText>
                <S.ItalicText>
                    <S.TextNameBold>Email:</S.TextNameBold> Weslley@email.com
                </S.ItalicText>
                <S.ItalicText>
                    <S.TextNameBold>Senha:</S.TextNameBold> ****
                </S.ItalicText>
                <S.ContainerButton>
                    <S.ContainerButtonEdit onPress={handleLoginClick}>
                        <S.TextName>
                            Sair
                        </S.TextName>
                    </S.ContainerButtonEdit>
                </S.ContainerButton>
            </S.ContainerUserData>
            <ComponentBar />
        </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
  }
});

export default Profile;
