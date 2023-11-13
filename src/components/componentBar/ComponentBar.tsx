import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconAwesome from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import Styles from "./Styles";

// Criando a barra de componentes em baixo
const ComponentBar = () => {
  // Criando as variáveis de navegação, tela que está ativa, rota ativa
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();
  const [activeScreen, setActiveScreen] = useState(route.name);

  // Definindo a rota ativa
  useEffect(() => {
    if (isFocused) {
      setActiveScreen(route.name);
    }
  }, [isFocused, route.name]);

  // Definindo a cor do icon e navegação
  const navigateToScreen = (screenName) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  return (
    // Criando o container principal do component
    <View style={Styles.fixedContainer}>
      {/* Container de cada icon */}
      <View style={Styles.iconContainer}>
        {/* Criando o botão de navegação e o icon */}
        <TouchableOpacity onPress={() => navigateToScreen("Home")}>
          <Icon
            name="home"
            size={30}
            color={activeScreen === "Home" ? "#FBC500" : "#8c8c8c"}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => navigateToScreen("Search")}>
          <Icon
            name="search"
            size={26}
            color={activeScreen === "Search" ? "#FBC500" : "#8c8c8c"}
          />
        </TouchableOpacity>
      </View>

      {/* Botão do meio, onde faço um tratamento para adicionar um círculo ao redor */}
      <View style={Styles.iconContainer}>
        <View style={Styles.heartIcon}>
          <TouchableOpacity onPress={() => navigateToScreen("Favorite")}>
            <Icon
              name="heart"
              size={28}
              color={activeScreen === "Favorite" ? "#FBC500" : "#8c8c8c"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => navigateToScreen("PopularMovies")}>
          <IconAwesome
            name="fire-alt"
            size={26}
            color={activeScreen === "PopularMovies" ? "#FBC500" : "#8c8c8c"}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => navigateToScreen("Profile")}>
          <Icon
            name="user"
            size={26}
            color={activeScreen === "Profile" ? "#FBC500" : "#8c8c8c"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exportando o componente
export default ComponentBar;
