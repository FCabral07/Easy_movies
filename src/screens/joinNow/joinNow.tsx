import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

// Criando a tela inicial do app
const JoinNow = (): JSX.Element => {
  // Criando as constantes de navegação
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    // Definindo o background
    <ImageBackground
      source={require("../../../assets/background.jpeg")}
      style={styles.backgroundImage}
    >
      {/* Criando o container e escurecendo ele no overlay */}
      <View style={styles.container}>
        <View style={styles.overlay}>
          <View style={styles.containerInit}>
            {/* Frase inicial e botão para seguir */}
            <Text style={styles.text}>Seja bem-vindo</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default JoinNow;
