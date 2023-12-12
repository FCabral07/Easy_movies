import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Styles from "./Styles";

// Criando a barra de componentes em baixo
const ComponentUpBar = () => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Search");
  };

  return (
    // Criando o container principal do component
    <View style={Styles.fixedContainer}>
      <View style={Styles.emptyView} />
      <Text style={Styles.appName}>IzyMovies</Text>
      {/* Container do icon */}
      <TouchableOpacity onPress={handleSearch} style={Styles.searchButton}>
        <Icon name="search" size={25} color="#FBC500" />
      </TouchableOpacity>
    </View>
  );
};

// Exportando o componente
export default ComponentUpBar;
