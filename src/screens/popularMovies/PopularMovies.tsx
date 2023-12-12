import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import PopularMovieCard from "../../components/popularMoviesComponents/PopularMovieCard";
import Styles from "./Styles";
import ComponentBar from "../../components/componentBar/ComponentBar";
import { TMDB_API_KEY } from "../../../env";
import Icon from "react-native-vector-icons/FontAwesome";

const PopularMovies: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [isSortedByRating, setIsSortedByRating] = useState(false);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          `${"https://api.themoviedb.org/3/movie/"}popular?api_key=${TMDB_API_KEY}`
        );

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
        setOriginalMovies(data.results); // Armazena a lista original de filmes
      } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
      }
    };

    getPopularMovies();
  }, []);

  const ordenarPorAvaliacao = () => {
    const sortedMovies = [...popularMovies].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setPopularMovies(sortedMovies);
    setIsSortedByRating(true);
  };

  const ordenarPorPopularidade = () => {
    setPopularMovies([...originalMovies]);
    setIsSortedByRating(false);
  };
  const exibirOpcoesOrdenacao = () => {
    if (isSortedByRating) {
      Alert.alert("Ordenar Filmes", "", [
        { text: "Por Popularidade", onPress: ordenarPorPopularidade },
      ]);
    } else {
      Alert.alert("Ordenar Filmes", "", [
        { text: "Por Avaliação", onPress: ordenarPorAvaliacao },
      ]);
    }
  };
  return (
    <View style={Styles.container}>
      <ScrollView
        contentContainerStyle={Styles.container}
        indicatorStyle="white"
        style={{ zIndex: 0 }}
      >
        <View style={Styles.header}>
          <Text style={Styles.title}>Filmes Populares</Text>
          <TouchableOpacity
            style={Styles.sortButton}
            onPress={exibirOpcoesOrdenacao}
          >
            <Icon name="sort" size={24} color="black" />
          </TouchableOpacity>
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
