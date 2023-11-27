import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import PopularMovieCard from "../../components/popularMoviesComponents/PopularMovieCard";
import Styles from "./Styles";
import ComponentBar from "../../components/componentBar/ComponentBar";
const apiKey = "6e6b6111611e5e3d284266b1ae5cfce5";
const moviesURL = "https://api.themoviedb.org/3/movie/";

const PopularMovies: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(`${moviesURL}popular?api_key=${apiKey}`);

        if (!response.ok) {
          console.error("Erro na requisição da API:", response.statusText);
          return;
        }

        const data = await response.json();

        if (!data.results) {
          console.error("A resposta da API não contém a propriedade 'results'");
          return;
        }

        setPopularMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <View style={Styles.container}>
      <ScrollView
        contentContainerStyle={Styles.container}
        indicatorStyle="white"
        style={{ zIndex: 0 }}
      >
        <View style={Styles.header}>
          <Text style={Styles.title}>Filmes Populares</Text>
        </View>
        <View>
          {popularMovies &&
            popularMovies.map((movie) => (
              <PopularMovieCard key={movie.id} movie={movie} />
            ))}
        </View>
      </ScrollView>
      <ComponentBar />
    </View>
  );
};

export default PopularMovies;
