import { Card } from "@rneui/base";
import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, Vibration} from "react-native";
import Styles from "../popularCards/Styles";
import Icon from "react-native-vector-icons/FontAwesome";



export const favoritesMovies = [] 

export const MovieCard = ({ image }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  

  const handleFavoritePress = () => {
    // Aqui você pode enviar os dados do card para a tela "Favorite"
    function favoritePress() {
      if(isFavorite == false) {
        favoritesMovies.push({ image })
        console.log("Filme adicionado à lista de Favoritos");
      } else if (isFavorite == true) {
        favoritesMovies.pop()
        console.log("Filme removido da lista de Favoritos");
      }
    }
    favoritePress()
    Vibration.vibrate()
    console.log("Lista Atual:");
    console.log(favoritesMovies);
    // Alterna o estado do favorito
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={Styles.cardContainer}>
      <Card containerStyle={{ backgroundColor: "#060d17", borderWidth: 0 }}>
        <Card.Image
          source={{ uri: image }}
          style={Styles.cardImage}
          resizeMode="cover"
        />
        <View style={Styles.favoriteIcon}>
          <TouchableOpacity onPress={handleFavoritePress}>
            <Icon
              name="heart"
              size={35}
              color={isFavorite ? "#FBC500" : "#8c8c8c"}
            />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const PopularCards = ({ movies}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <ScrollView horizontal>
            {movies.map((movie, i) => (
              <MovieCard key={i} image={movie.image} />
              
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularCards;