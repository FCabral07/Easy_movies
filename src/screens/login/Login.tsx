import React from "react";
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

// Criando a página de login
const Login = (): JSX.Element => {
  // Definindo as constantes de navegação
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
              <Image
                source={require("../../../assets/izyFilm.png")}
                style={{ width: 250, height: 250 }}
              />
            </View>

            {/* Criando os inputs de login e senha */}
            <View style={Styles.inputContainer}>
              <View style={Styles.inputWithIcon}>
                <Icon name="user" size={25} color="#FFF0F5" style={Styles.icon} />
                <TextInput
                  style={Styles.input}
                  placeholder="Login"
                  placeholderTextColor="#FFF0F5"
                />
              </View>
              <View style={Styles.inputWithIcon}>
                <Icon name="lock" size={25} color="#FFF0F5" style={Styles.icon} />
                <TextInput
                  style={Styles.input}
                  placeholder="Password"
                  placeholderTextColor="#FFF0F5"
                  secureTextEntry={true}
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
