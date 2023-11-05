import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

const Home = (): JSX.Element => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInit}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Teste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
