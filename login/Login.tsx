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
import Styles from "./Styles";

const Login = (): JSX.Element => {
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
            <View style={Styles.logo}>
              <Image
                source={require("../assets/izyFilm.png")}
                style={{ width: 250, height: 250 }}
              />
            </View>

            <View style={Styles.inputContainer}>
              <View style={Styles.inputWithIcon}>
                <Icon name="user" size={25} color="#848484" style={Styles.icon} />
                <TextInput
                  style={Styles.input}
                  placeholder="Login"
                  placeholderTextColor="#848484"
                />
              </View>
              <View style={Styles.inputWithIcon}>
                <Icon name="lock" size={25} color="#848484" style={Styles.icon} />
                <TextInput
                  style={Styles.input}
                  placeholder="Password"
                  placeholderTextColor="#848484"
                  secureTextEntry={true}
                />
              </View>
            </View>

            <View style={Styles.createAccountForgot}>
              <Text onPress={() => {}} style={Styles.link}>
                Não tem uma conta? Crie uma
              </Text>
              <Text onPress={() => {}} style={Styles.link}>
                Esqueci a senha
              </Text>
            </View>

            <TouchableOpacity style={Styles.button}>
              <Text style={Styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default Login;
