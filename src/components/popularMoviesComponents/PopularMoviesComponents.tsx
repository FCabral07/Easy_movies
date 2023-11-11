// PopularMoviesComponents.tsx
import React from "react";
import { View, Text, Image } from "react-native";
import { popularMoviesStyles as Styles } from "./Styles";

interface Movie {
  id: number;
  title: string;
  genre: string;
  image: string;
}

interface MovieCardProps {
  title: string;
  genre: string;
  image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, genre, image }) => (
  <View style={Styles.card}>
    <Image source={{ uri: image }} style={Styles.image} />
    <Text style={Styles.title}>{title}</Text>
    <Text style={Styles.genre}>{genre}</Text>
  </View>
);

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <View style={Styles.container}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          image={movie.image}
        />
      ))}
    </View>
  );
};

export { MovieCard, MovieList };
