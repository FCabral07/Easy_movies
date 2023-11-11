import React from "react";
import perfil from "../../../assets/perfil.png"
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import * as S from './styles'
import ComponentBar from "../../components/componentBar/ComponentBar";

// Criando a página home
const Edit = (): JSX.Element => {
    const navigation = useNavigation();

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
                    <S.ContainerCamera>
                        <Icon name="camerao" size={20} color="#fafafa" />
                    </S.ContainerCamera>
                </S.ContainerPerfil>
                <S.ContainerInfo>
                    <S.TextNameBold>Minhas informações</S.TextNameBold>
                    <S.Line></S.Line>
                </S.ContainerInfo>
                <S.ContainerUserData>

                    <S.ContainerInput>
                        <S.TextNameBold>Nome:</S.TextNameBold>
                        <S.ContainerInputBox placeholder="Weslley" placeholderTextColor="#f0f0f0" />
                    </S.ContainerInput>
                    <S.ContainerInput>
                        <S.TextNameBold>Email:</S.TextNameBold>
                        <S.ContainerInputBox placeholder="Weslley@email.com" placeholderTextColor="#f0f0f0" />
                    </S.ContainerInput>
                    <S.ContainerInput>
                        <S.TextNameBold>Senha:</S.TextNameBold>
                        <S.ContainerInputBox placeholder="*****" placeholderTextColor="#f0f0f0" />
                    </S.ContainerInput>

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

export default Edit;
