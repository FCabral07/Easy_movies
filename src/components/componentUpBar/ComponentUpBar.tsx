import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Styles from './Styles'

// Criando a barra de componentes em baixo
const ComponentUpBar = () => {
  return (
    // Criando o container principal do component
    <View style={Styles.fixedContainer}>
      <Text style={Styles.appName}>IzyMovies</Text>
      {/* Container do icon */}
      <View style={Styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="search" size={20} color="#FBC500" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exportando o componente
export default ComponentUpBar;
