import { Card } from "@rneui/base";
import React from "react";
import {
  ScrollView,
  View
} from "react-native";
import ComponentUpBar from "../componentUpBar/ComponentUpBar";
import Styles from "../popularCards/Styles";

const PopularCards = (): JSX.Element => {

  const movies = [
    { name: "Teste1", genre: "teste", image: "https://www.atoupeira.com.br/wp-content/uploads/2023/05/oppenheimer-novo-poster.jpg"},
    { name: "Teste2", genre: "teste", image: "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg" },
    { name: "Teste3", genre: "teste", image: "https://example.com/image3.jpg" },
    { name: "Teste4", genre: "teste", image: "https://example.com/image4.jpg" },
  ];

  return (
    <View>
      <ComponentUpBar/>
      <ScrollView>
        <View >
          <ScrollView horizontal>
            {movies.map((movie, i) => {
              return (
                <View key={i} style={Styles.cardContainer}>
                  <Card>
                    <Card.Image
                      source={{ uri: movie.image }}
                      style={Styles.cardImage} // Aplicar estilo para a imagem
                    />
                  </Card>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularCards;
