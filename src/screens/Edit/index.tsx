import React, { useEffect, useState } from "react";
import perfil from "../../../assets/perfil.png"
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import * as S from './styles'
import ComponentBar from "../../components/componentBar/ComponentBar";
import FirebaseService from "../../../backend/services/firebaseService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-tiny-toast";

// Criando a página home
const Edit = (): JSX.Element => {
    // Informações do usuário
    const [userDetails, setUserDetails] = useState<any>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigation = useNavigation();

    const fetchUserDetails = async () => {
        try {
            // Obtendo o email do AsyncStorage
            const userEmail = (await AsyncStorage.getItem('userEmail')).replace(/['"]+/g, '').trim();
            setEmail(userEmail);
        } catch (err) {
            console.error(err);
        }
    };

    // Recuperando as informações do AsyncStorage
    useEffect(() => {
        // Chama a função para poder funcionar
        fetchUserDetails();
    }, []);

    const handleLoginClick = () => {
        navigation.navigate("Profile" as never);
    };

    const updateUserEmail = async (newEmail: string) => {
        try {
            await FirebaseService.updateUser(newEmail, '');

            Toast.showSuccess('Usuário atualizado com sucesso', {
                position: Toast.position.CENTER
            });
        } catch (err) {
            console.log('Email não atualizada: ', err);
            Toast.show('Usuário não atualizado, consulte um operador.', {
                position: Toast.position.CENTER,
                containerStyle: {
                    backgroundColor: 'red',
                },
                textStyle: {
                    color: 'white',
                },
            });


        }
    };

    const updateUserPassword = async (newPassword: string) => {
        try {
            await FirebaseService.updateUser(email, newPassword);

            Toast.showSuccess('Usuário atualizado com sucesso', {
                position: Toast.position.CENTER
            });
        } catch (err) {
            Toast.show('Usuário não atualizado, consulte um operador.', {
                position: Toast.position.CENTER,
                containerStyle: {
                    backgroundColor: 'red',
                },
                textStyle: {
                    color: 'white',
                },
            });

            console.log('Senha não atualizada: ', err);
        }
    };

    const updateUserName = async (newName) => {
        try {
            const result = await FirebaseService.updateUserName(email, newName);

            if (result === true) {
                Toast.showSuccess('Usuário atualizado com sucesso', {
                    position: Toast.position.CENTER
                });
            } else {
                Toast.show('Usuário não atualizado, consulte um operador.', {
                    position: Toast.position.CENTER,
                    containerStyle: {
                        backgroundColor: 'red',
                    },
                    textStyle: {
                        color: 'white',
                    },
                });
            }
        } catch (err) {
            console.log('Senha não atualizada: ', err);
            Toast.show('Usuário não atualizado, consulte um operador.', {
                position: Toast.position.CENTER,
                containerStyle: {
                    backgroundColor: 'red',
                },
                textStyle: {
                    color: 'white',
                },
            });
        }
    }

    const handleEditClick = () => {
        if (email) {
            updateUserEmail(email);
        }

        if (password) {
            updateUserPassword(password);
        }

        if (name) {
            updateUserName(name);
            setTimeout(() => {
                navigation.navigate('Profile')
            }, 3000);
        }
    };

    // Recuperando as informações do AsyncStorage
    useEffect(() => {
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

        // Chama a função para poder funcionar
        fetchUserDetails();
    }, []);
    return (
        <>
            <S.Container>
                <S.ContainerPerfil>
                    <S.ContainerImage>
                        <S.Image source={perfil} />
                    </S.ContainerImage>
                </S.ContainerPerfil>
                <S.ContainerInfo>
                    <S.TextNameBold>Minhas informações</S.TextNameBold>
                    <S.Line></S.Line>
                </S.ContainerInfo>
                <S.ContainerUserData>

                    <S.ContainerInput>
                        <S.TextNameBold>Nome:</S.TextNameBold>
                        <S.ContainerInputBox
                            placeholder={userDetails ? userDetails.user : 'Carregando...'}
                            placeholderTextColor="#f0f0f0"
                            onChangeText={(text) => setName(text)} />
                    </S.ContainerInput>
                    <S.ContainerInput>
                        <S.TextNameBoldLock>Username:</S.TextNameBoldLock>
                        <S.ContainerInputBoxLock
                            placeholder={userDetails ? userDetails.username : 'Carregando...'}
                            placeholderTextColor="#808080"
                            editable={false} />
                    </S.ContainerInput>
                    <S.ContainerInput>
                        <S.TextNameBold>Email:</S.TextNameBold>
                        <S.ContainerInputBox
                            placeholder={userDetails ? userDetails.email : 'Carregando...'}
                            placeholderTextColor="#808080"
                            editable={false} />
                    </S.ContainerInput>
                    <S.ContainerInput>
                        <S.TextNameBold>Senha:</S.TextNameBold>
                        <S.ContainerInputBox
                            placeholder="*****"
                            placeholderTextColor="#f0f0f0"
                            onChangeText={(text) => setPassword(text)} />
                    </S.ContainerInput>

                    <S.ContainerButtonExit>
                        <S.ButtonExit onPress={handleLoginClick}>
                            <S.TextNameBold>
                                Voltar
                            </S.TextNameBold>
                        </S.ButtonExit>
                        <S.ButtonExit onPress={handleEditClick}>
                            <S.TextNameBold>
                                Editar
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