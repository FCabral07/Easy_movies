import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

const JoinNow = (): JSX.Element => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.overlay}>
          <View style={styles.containerInit}>
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
