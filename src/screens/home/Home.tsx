import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import Styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import ComponentBar from "../../components/componentBar/ComponentBar";
import { LinearGradient } from "expo-linear-gradient";

// Criando a página home
const Home = (): JSX.Element => {
  // Definindo constantes para navegação
  const navigation = useNavigation();

  const handleLoginClick = () => {
    navigation.navigate("Home" as never);
  };

  return (
    // Criando o container
    <View style={Styles.container}>
      {/* <View style={Styles.Navbar}>

      </View> */}
      {/* Permitindo scrollar */}
      <ScrollView
        contentContainerStyle={Styles.container}
        indicatorStyle="white"
        style={{ zIndex: 0 }}
      >
        <View style={Styles.focus}>
          <ImageBackground
            source={{
              uri: "https://www.atoupeira.com.br/wp-content/uploads/2023/05/oppenheimer-novo-poster.jpg",
            }}
            style={Styles.imageFocus}
          >
            <LinearGradient
              colors={["rgba(6, 13, 23, 0)", "rgba(6, 13, 23, 1)"]}
              style={Styles.linearGradient}
            >
              <View style={Styles.buttonsContainer}>
                <TouchableOpacity style={Styles.buttonFavorite}>
                  <Text style={Styles.buttonText}>+ Favorito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonDetails}>
                  <Text style={Styles.buttonText}>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Popular</Text>
          </View>
        </View>

        <View style={Styles.top10}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>TOP 10</Text>
          </View>
          <Card containerStyle={{ width: 200, height: 150 }}>
            <Card.Title>Meu Título</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: "https://lh6.googleusercontent.com/Wrb6JelKQlJTHhPNKh6e4N2LdpEXlh78TIICH30GnipXmhuC-yyNihuQ11yZiN04IPhskJNG0W_uV9DQuebXn8CeBGiinoK99I8yGlExt9cBLvK_8tq7MdGh1P0KcJds_NKLUTtF" }} />
            <Text>Conteúdo do cartão</Text>
          </Card>
        </View>

        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Comédia</Text>
          </View>
        </View>

        <View style={Styles.films}>
          <View style={Styles.newFilm}>
            <Text style={Styles.text}>Terror</Text>
          </View>
        </View>
      </ScrollView>
      <ComponentBar />
    </View>
  );
};

export default Home;
