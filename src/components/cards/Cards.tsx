import React, { useEffect, useState } from "react";
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
import Styles from "../cards/Styles";
import Modal from "react-native-modal";
import {
  FavoritesAdd,
  FavoritesRemove,
  VerifyFavorites,
  favoritesMovies,
} from "../favorites/Favorites";
import FirebaseService from "../../../backend/services/firebaseService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ReturnEmail = () => {
  return AsyncStorage.getItem("userEmail")
    .then((email) => {
      const formattedEmail = email?.replace(/['"]+/g, "").trim();
      return formattedEmail;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const Cards = ({ movie }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = await ReturnEmail();

        if (userEmail) {
          const favoritesMovie = await FirebaseService.getFavoritesMovies(
            userEmail
          );
          setIsFavorite(favoritesMovie.includes(movie.id));
        } else {
          console.log("Email não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar filmes favoritos.", error);
      }
    };

    fetchData();
  }, []);

  const handleFavoritePress = () => {
    function favoritePress() {
      if (!VerifyFavorites({ movie })) {
        FavoritesAdd({ movie });
        setIsFavorite(true);
      } else {
        FavoritesRemove({ movie });
        setIsFavorite(false);
        console.log("Filme removido da lista de Favoritos");
      }
    }

    favoritePress();
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={Styles.cardContainer}>
      <Card
        containerStyle={{
          backgroundColor: "#060d17",
          borderWidth: 1,
          borderRadius: 12,
          borderColor: "#8c8c8c",
          padding: 0,
        }}
      >
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
              size={30}
              color={isFavorite ? "#FBC500" : "#8c8c8c"}
            />
          </TouchableOpacity>
        </View>
      </Card>

      <Modal isVisible={isModalVisible}>
        <View style={Styles.containerModal}>
          <Image source={{ uri: movie.image }} style={Styles.imageModal} />
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
                <Icon name="imdb" color="#d5d5d5" size={20}></Icon>
                <Text style={Styles.numberRatingContainer}>{movie.rating}</Text>
              </View>
            </View>
            <View style={Styles.releaseDateContainer}>
              <Text style={Styles.textContainer}>Data de lançamento</Text>
              <View style={Styles.dateContainer}>
                <Icon name="calendar-o" color="#d5d5d5" size={20}></Icon>
                <Text style={Styles.date}>{movie.release_date}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cards;
