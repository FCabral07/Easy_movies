import React from "react";
import { View } from "react-native";
import Styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";

// Criando o component da navbar que fica em baixo
const ComponentBar = () => {
  return (
    // Criando o container
    <View style={Styles.fixedContainer}>
        {/* Criando os icons */}
      <View style={Styles.iconContainer}>
        <Icon name="home" size={28} color="#FFF0F5" />
      </View>
      <View style={Styles.iconContainer}>
        <Icon name="search" size={28} color="#FFF0F5" />
      </View>
      <View style={Styles.iconContainer}>
        {/* Criando os favoritos, que ficam centralizados */}
        <View style={Styles.heartIcon}>
          <Icon name="heart" size={28} color="#FFF0F5" />
        </View>
      </View>
      <View style={Styles.iconContainer}>
        <Icon5 name="fire-alt" size={28} color="#FFF0F5" />
      </View>
      <View style={Styles.iconContainer}>
        <Icon name="user" size={28} color="#FFF0F5" />
      </View>
    </View>
  );
};

export default ComponentBar;
