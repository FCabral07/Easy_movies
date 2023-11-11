import React from "react";
import { StyleSheet } from "react-native"
import perfil from "../../../assets/perfil.png"
import { useNavigation } from "@react-navigation/native";
import ComponentBar from "../../components/componentBar/ComponentBar";
import * as S from './Styles'

// Criando a página home
const Profile = (): JSX.Element => {
    // Definindo constantes para navegação
    const navigation = useNavigation();

    const handleEditAccount = () => {
        navigation.navigate("Edit" as never);
    };

    const handleIconClick = () => {
        navigation.navigate("JoinNow" as never);
    };

    const handleLoginClick = () => {
        navigation.navigate("Home" as never);
    };

    return (
        <>
            <S.Container>
                <S.ContainerPerfil>
                    <S.ContainerImage>
                        <S.Image source={perfil} />
                    </S.ContainerImage>
                    <S.TextName>Weslley</S.TextName>
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
                        <S.TextNameBold>Nome:</S.TextNameBold> Weslley
                    </S.ItalicText>
                    <S.ItalicText>
                        <S.TextNameBold>Email:</S.TextNameBold> Weslley@email.com
                    </S.ItalicText>
                    <S.ItalicText>
                        <S.TextNameBold>Senha:</S.TextNameBold> ****
                    </S.ItalicText>
                    <S.ContainerButtonExit>
                        <S.ButtonExit onPress={handleLoginClick}>
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
