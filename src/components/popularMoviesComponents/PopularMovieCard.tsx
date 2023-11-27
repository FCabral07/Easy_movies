import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { popularMoviesStyles as Styles } from "./Styles";

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
  return (
    <View style={Styles.card}>
      <Image
        source={{ uri: imagesURL + movie.backdrop_path }}
        style={Styles.image}
        resizeMode="cover"
      />
      <Text style={Styles.title}>{movie.title}</Text>
      {/* 
      <Text style={Styles.genre}>{movie.overview}</Text>
      <Text style={Styles.genre}>Release Date: {movie.release_date}</Text>
      */}
      <Text style={Styles.voteAverage}>
        <Ionicons name="star" size={18} color="gold" /> {movie.vote_average}
      </Text>
    </View>
  );
};

export default PopularMovieCard;
