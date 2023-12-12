import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Styles from './Styles'

// Criando a barra de componentes em baixo
const ComponentUpBarFavs = () => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Search");
  };

  return (
    // Criando o container principal do component
    <View style={Styles.fixedContainer}>
      <Text style={Styles.appName}>IzyMovies</Text>
      {/* Container do icon */}
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search" size={25} color="#FBC500" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exportando o componente
export default ComponentUpBarFavs;
