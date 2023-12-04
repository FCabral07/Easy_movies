import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../components/Logo/ComponentLogo";
import FirebaseService from "../../../backend/services/firebaseService";
import Toast from 'react-native-tiny-toast'


// Página de criar conta
const CreateAccount = (): JSX.Element => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Constantes de navegação
  const navigation = useNavigation();

  const handleIconClick = () => {
    navigation.navigate("Login");
  };


  // Configurando a requisição
  const onSubmit = async () => {

    const data = { user, email, username }

    if (!user || !email || !password || !username) {
      // Mostra um toast indicando que os campos estão vazios
      Toast.show('Preencha todos os campos!', {
        containerStyle: {
          backgroundColor: 'red',
        },
        textStyle: {
          color: 'white',
        },
      });

      return;
    }

    if (username.includes(' ')) {
      // Mostra um toast indicando que o campo username nao aceita espaços
      Toast.show('Username não aceita espaços!', {
        containerStyle: {
          backgroundColor: 'red',
        },
        textStyle: {
          color: 'white',
        },
      });

      return;
    }

    try {
      // Fazendo a requisição para salvar o usuário
      try {
        // Salvando os dados do usuário
        const result = await FirebaseService.save('Users', data, username);
        if (result === true) {
          Toast.show('Username já em uso.', {
            position: Toast.position.TOP,
            containerStyle: {
              backgroundColor: 'red',
              borderRadius: 15
            },
            textStyle: {
              color: 'white',
            },
          });
        } else {
          await FirebaseService.delete(username);
          await FirebaseService.createUser(email, password);
          await FirebaseService.save('Users', data, username);

          // Toast de sucesso
          Toast.showSuccess('Usuário criado com sucesso!', {
            containerStyle: {
              backgroundColor: 'green',
            },
            textStyle: {
              color: 'white',
            },
          });

          // Navegando para login
          setTimeout(() => {
            navigation.navigate('Login')
          }, 2000);
        }
      } catch (error) {
        console.error('Erro ao criar usuário ou ao salvar dados: ', error);
        Toast.show('Username já em uso.', {
          position: Toast.position.TOP,
          containerStyle: {
            backgroundColor: 'red',
            borderRadius: 15
          },
          textStyle: {
            color: 'white',
          },
        });
      }
    } catch (err) {
      Toast.show('Erro ao criar o usuário!', {
        containerStyle: {
          backgroundColor: 'red',
        },
        textStyle: {
          color: 'white',
        },
      });
      console.error('Erro ao salvar dados', err);
    }
  }



  return (
    // Background
    <ImageBackground
      source={require("../../../assets/background.jpeg")}
      style={Styles.backgroundImage}
    >
      {/* Escurecendo e definindo o teclado */}
      <View style={Styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={Styles.container}
        >
          {/* Permitindo scrollar */}
          <ScrollView
            contentContainerStyle={Styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
          >
            {/* Seta de voltar */}
            <View>
              <TouchableOpacity onPress={handleIconClick}>
                <View style={Styles.arrowBack}>
                  <IconMaterial
                    name="arrow-back-ios"
                    size={25}
                    color="#F5F5F5"
                  />
                </View>
              </TouchableOpacity>
            </View>

            {/* Logo */}
            <View style={Styles.logo}>
              <Logo />
            </View>

            {/* Container de input com nome, senha, email e username */}
            <View style={Styles.inputContainer}>
              <View style={Styles.inputWithIcon}>
                <Icon
                  name="idcard"
                  size={25}
                  color="#FFF0F5"
                  style={Styles.icon}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Name"
                  placeholderTextColor="#FFF0F5"
                  onChangeText={(text) => setUser(text)}
                />
              </View>
              <View style={Styles.inputWithIcon}>
                <Icon
                  name="user"
                  size={25}
                  color="#FFF0F5"
                  style={Styles.icon}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Username"
                  placeholderTextColor="#FFF0F5"
                  onChangeText={(text) => {
                    const formattedUsername = text.replace(/\s/g, '');
                
                    if (formattedUsername !== text) {
                      Toast.show('Não são permitidos espaços no username.', {
                        position: Toast.position.TOP,
                        containerStyle: {
                          backgroundColor: 'red',
                          borderRadius: 15,
                        },
                        textStyle: {
                          color: 'white',
                        },
                      });
                    }
                
                    setUsername(text.toLowerCase()); // Define o username sem espaços
                  }}
                />
              </View>
              <View style={Styles.inputWithIcon}>
                <IconMaterial
                  name="alternate-email"
                  size={25}
                  color="#FFF0F5"
                  style={Styles.icon}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Email"
                  placeholderTextColor="#FFF0F5"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={Styles.inputWithIcon}>
                <Icon
                  name="lock"
                  size={25}
                  color="#FFF0F5"
                  style={Styles.icon}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Password"
                  placeholderTextColor="#FFF0F5"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)} />
              </View>
            </View>

            {/* Botão de criar conta */}
            <TouchableOpacity
              style={Styles.button}
              onPress={onSubmit}
            >
              <Text style={Styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default CreateAccount;
