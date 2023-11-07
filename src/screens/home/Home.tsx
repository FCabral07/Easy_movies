import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import ComponentBar from "../../components/componentBar/ComponentBar";
import ComponentUpBar from "../../components/componentUpBar/ComponentUpBar";

// Criando a página home
const Home = (): JSX.Element => {
  // Definindo constantes para navegação
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount" as never);
  };

  const handleIconClick = () => {
    navigation.navigate("Login" as never);
  };

  const handleLoginClick = () => {
    navigation.navigate("Home" as never);
  };

  return (
    // Criando o container
    <View style={Styles.container}>
      <ComponentUpBar />
      {/* Permitindo scrollar */}
      <ScrollView
        contentContainerStyle={Styles.container}
        indicatorStyle="white"
        style={{ zIndex: 0 }}
      >
        {/* Criando a seta de voltar no topo da tela */}
        {/* <View>
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
        </View> */}
      </ScrollView>
      <ComponentBar />
    </View>
  );
};

export default Home;
