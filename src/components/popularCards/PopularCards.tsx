import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "@rneui/base";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import IconClose from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import FirebaseService from "../../../backend/services/firebaseService";
import {
  FavoritesAdd,
  FavoritesRemove,
  VerifyFavorites,
} from "../favorites/Favorites";
import Styles from "../popularCards/Styles";

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

export const MovieCard = ({ movie }) => {
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
      } else {
        FavoritesRemove({ movie });
        console.log("Filme removido da lista de Favoritos");
      }
    }

    favoritePress();
  };

  return (
    <View style={Styles.cardContainer}>
      <Card
        containerStyle={{
          backgroundColor: "#060d17",
          borderWidth: 1,
          padding: 0,
          borderRadius: 12,
          borderColor: "#8c8c8c"
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
