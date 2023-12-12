import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "@rneui/base";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import IconClose from "react-native-vector-icons/AntDesign";
import FirebaseService from "../../../backend/services/firebaseService";
import { Ionicons } from "@expo/vector-icons";
import { popularMoviesStyles as Styles } from "./Styles";
import {
  FavoritesAdd,
  FavoritesRemove,
  VerifyFavorites,
} from "../favorites/Favorites";
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
interface MovieCardProps {
  movie: {
    backdrop_path: string;
    title: string;
    vote_average: number;
    id: number;
    overview: string;
    release_date: string;
  };
}
//
const imagesURL = "https://image.tmdb.org/t/p/w500/";

const PopularMovieCard: React.FC<MovieCardProps> = ({ movie }) => {
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
    <View style={Styles.card}>
      <Image
        source={{ uri: imagesURL + movie.backdrop_path }}
        style={Styles.image}
        resizeMode="cover"
      />
      <Text style={Styles.title}>{movie.title}</Text>
      <Text style={Styles.voteAverage}>
        <Ionicons name="star" size={18} color="gold" /> {movie.vote_average}
      </Text>
      <View style={Styles.favoriteIcon}>
        <TouchableOpacity onPress={handleFavoritePress}>
          <Icon
            name="heart"
            size={30}
            color={isFavorite ? "#FBC500" : "#8c8c8c"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularMovieCard;
