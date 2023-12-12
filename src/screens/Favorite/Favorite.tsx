import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, FlatList } from "react-native";
import FilterModal from "../../components/popularMoviesComponents/FilterModal";
import Styles from "../Favorite/Styles";
import ComponentBar from "../../components/componentBar/ComponentBar";
import Cards from "../../components/cards/Cards";
import { TMDB_API_KEY } from "../../../env";
import axios from "axios";
import FirebaseService from "../../../backend/services/firebaseService";
import ComponentUpBarFavs from "../../components/componentUpBarFavs/ComponentUpBarFavs";

const Favorite: React.FC = () => {
  const [favs, setFavs] = useState([]);
  const [movies, setMovies] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const fetchMovieDetails = async (movieId) => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=pt-BR`);

        // Formtando a data para o padrão local e adicionando um dia, pois ele perde um dia na conversão
        const releaseDateUTC = new Date(response.data.release_date + "T24:00:00Z");
        const timezone = "America/Recife";
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          timeZone: timezone,
        };

        // Retornando a data
        const formattedDate = releaseDateUTC.toLocaleDateString(
          "pt-BR",
          options
        );

        // Formatando o rating para até 2 casas pós vírgula
        const rating = parseFloat(response.data.vote_average).toFixed(2);

        // Processamento dos dados do filme
        const movieDetails = {
          id: response.data.id,
          image: `https://image.tmdb.org/t/p/w500/${response.data.poster_path}`,
          title: response.data.title,
          description: response.data.overview,
          release_date: formattedDate,
          rating: rating,
        };

        return movieDetails;
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
        throw error;
      }
    };

    const fetchFavoritesData = async (moviesIds) => {
      try {
        const fetchedMovies = [];
        for (const movieId of moviesIds) {
          const data = await fetchMovieDetails(movieId);
          fetchedMovies.push(data);
        }
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Erro ao buscar detalhes dos filmes:', error);
      }
    };

    const fetchData = async () => {
      try {
        const result = await FirebaseService.findMovie();
        setFavs(result || []);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    // Obtém IDs dos filmes favoritos
    fetchData();

    if (favs.length > 0) {
      fetchFavoritesData(favs);
    }
  }, [updateCount]);

  useEffect(() => {
    if (favs.length > 0 && updateCount < 2) {
      setUpdateCount(prevCount => prevCount + 1); // Incrementa o contador
    }
  }, [favs, updateCount]);

  console.log('MOVIES: ', movies);
  console.log('FAVS: ', favs);


  return (
    <View style={Styles.container}>
      <ComponentUpBarFavs />
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={Styles.moviesContainer}
        renderItem={({ item }) => (
          <View style={Styles.cardContainer}>
            <Cards movie={item} />
          </View>
        )}
      />
      <ComponentBar />
    </View>
  );
};

export default Favorite;