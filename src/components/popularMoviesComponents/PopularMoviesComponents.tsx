// PopularMoviesComponents.tsx
import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import { popularMoviesStyles as styles } from "./Styles";

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

const MovieCard: React.FC<MovieCardProps> = ({ title, genre, image }) => {
  return (
    <Card containerStyle={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.genre}>{genre}</Text>
    </Card>
  );
};

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <View style={styles.container}>
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
