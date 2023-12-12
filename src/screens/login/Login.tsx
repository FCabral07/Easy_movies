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
import Toast from "react-native-tiny-toast";
import FirebaseService from "../../../backend/services/firebaseService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritesLogin } from "../../components/favorites/Favorites";

// Criando a página de login
const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Definindo as constantes de navegação
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const handleIconClick = () => {
    navigation.navigate("JoinNow");
  };

  const handleLoginClick = async () => {
    if (!email || !password) {
      // Mostrar um toast indicando que os campos estão vazios
      Toast.show("Preencha todos os campos!", {
        containerStyle: {
          backgroundColor: "red",
        },
        textStyle: {
          color: "white",
        },
      });

      return;
    }

    try {
      const loginAccount = FirebaseService.login(email, password);

      // Salvando as informações de login no AsyncStorage
      await AsyncStorage.setItem("userEmail", JSON.stringify(email));

      // Carregando a lista de favoritos
      FavoritesLogin();

      // Toast
      Toast.showSuccess("Usuário logado com sucesso!", {
        containerStyle: {
          backgroundColor: "green",
        },
        textStyle: {
          color: "white",
        },
      });

      // Navegando para login
      setTimeout(() => {
        navigation.navigate("Home");
      }, 2000);
    } catch (err) {
      Toast.show("Erro ao logar!", {
        containerStyle: {
          backgroundColor: "red",
        },
        textStyle: {
          color: "white",
        },
      });
      console.error("Erro ao fazer login", err);
      console.error("Erro ao fazer login", err);
    }
  };

  return (
    // Fundo da página
    <ImageBackground
      source={require("../../../assets/background.jpeg")}
      style={Styles.backgroundImage}
    >
      {/* Deixando ela mais escurecida */}
      <View style={Styles.overlay}>
        {/* Permitindo scrollar e definindo a plataforma */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={Styles.container}
        >
          <ScrollView
            contentContainerStyle={Styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
          >
            {/* Criando a seta de voltar */}
            <View>
              <TouchableOpacity onPress={handleIconClick}>
                <View style={Styles.arrowBack}>
                  <IconMaterial
                    name="arrow-back-ios"
                    size={25}
                    color="#F5F5F5"
                    style={Styles.icon}
                  />
                </View>
              </TouchableOpacity>
            </View>

            {/* Definindo a logo */}
            <View style={Styles.logo}>
              <Logo />
            </View>

            {/* Criando os inputs de login e senha */}
            <View style={Styles.inputContainer}>
              <View style={Styles.inputWithIcon}>
                <Icon
                  name="user"
                  size={25}
                  color="#FFF0F5"
                  style={Styles.icon}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Email"
                  placeholderTextColor="#FFF0F5"
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
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
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
            </View>

            {/* Criando os links de criação de conta e esqueceu a senha */}
            <View style={Styles.createAccountForgot}>
              <Text onPress={handleCreateAccount} style={Styles.link}>
                Não tem uma conta? Crie uma
              </Text>
              <Text onPress={() => {}} style={Styles.link}>
                Esqueci a senha
              </Text>
            </View>

            {/* Criando o botão de login */}
            <TouchableOpacity style={Styles.button} onPress={handleLoginClick}>
              <Text style={Styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default Login;
