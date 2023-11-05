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

const Login = (): JSX.Element => {
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
    <ImageBackground
      source={require("../assets/background.jpeg")}
      style={Styles.backgroundImage}
    >
      <View style={Styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={Styles.container}
        >
          <ScrollView 
          contentContainerStyle={Styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
          >
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

            <View style={Styles.logo}>
              <Image
                source={require("../assets/izyFilm.png")}
                style={{ width: 250, height: 250 }}
              />
            </View>

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

            <View style={Styles.createAccountForgot}>
              <Text onPress={handleCreateAccount} style={Styles.link}>
                Não tem uma conta? Crie uma
              </Text>
              <Text onPress={() => {}} style={Styles.link}>
                Esqueci a senha
              </Text>
            </View>

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
