import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Vibration,
  Image,
  Text,
} from "react-native";
import { Card } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import IconClose from "react-native-vector-icons/AntDesign";
import Styles from "../popularCards/Styles";
import Modal from "react-native-modal";

export const favoritesMovies = [];

export const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleFavoritePress = () => {
    function favoritePress() {
      if (isFavorite === false) {
        favoritesMovies.push(movie);
        console.log("Filme adicionado à lista de Favoritos");
      } else {
        favoritesMovies.pop();
        console.log("Filme removido da lista de Favoritos");
      }
    }
    favoritePress();
    Vibration.vibrate();
    console.log("Lista Atual:");
    console.log(favoritesMovies);
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={Styles.cardContainer}>
      <Card containerStyle={{ backgroundColor: "#060d17", borderWidth: 0 }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Card.Image
            source={{ uri: movie.image }}
            style={Styles.cardImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
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

      <Modal isVisible={isModalVisible}>
        <View style={Styles.containerModal}>
          <Image
            source={{ uri: movie.image }}
            style={Styles.imageModal}
            // resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={Styles.iconModal}
          >
            <IconClose name="close" color="#fff" size={30}></IconClose>
          </TouchableOpacity>
          <View style={Styles.textTitleContainer}>
            <Text style={Styles.textTitleModal}>{movie.title}</Text>
          </View>
          <View>
            <Text style={Styles.textDescriptionContainer}>Descrição</Text>
            <Text style={Styles.textDescriptionModel}>{movie.description}</Text>
          </View>
          <View style={Styles.generalContainer}>
            <View style={Styles.ratingContainer}>
              <Text style={Styles.textContainer}>Nota crítica</Text>
              <View style={Styles.averageScore}>
                <Icon name="imdb" color='#d5d5d5' size={20}></Icon>
                <Text style={Styles.numberRatingContainer}>{movie.rating}</Text>
              </View>
            </View>
            <View style={Styles.releaseDateContainer}>
              <Text style={Styles.textContainer}>Data de lançamento</Text>
              <View style={Styles.dateContainer}>
                <Icon name="calendar-o" color='#d5d5d5' size={20}></Icon>
                <Text style={Styles.date}>{movie.release_date}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const PopularCards = ({ movies }) => {
  return (
    <ScrollView horizontal>
      <View style={{ flexDirection: "row" }}>
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PopularCards;
