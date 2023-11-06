import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import ComponentBar from '../../components/componentBar/ComponentBar'
import perfil from "../../../assets/perfil.png"
import { LinearGradient } from 'expo-linear-gradient';
import * as S from './styles'

export function Edit() {
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
                    <S.TextNameBold>Senha:</S.TextNameBold> ********
                </S.ItalicText>
                <S.ContainerButton>
                    <S.ContainerButtonEdit>
                        <S.TextName>
                            Sair
                        </S.TextName>
                    </S.ContainerButtonEdit>
                </S.ContainerButton>
            </S.ContainerUserData>
            <ComponentBar />
        </LinearGradient>
    );
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    }
});