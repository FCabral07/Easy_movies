import axios from 'axios';
import { useState } from 'react';
import { FlatList, Keyboard, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Cards from '../cards/Cards';
import ComponentBar from '../componentBar/ComponentBar';
import Styles from './Styles';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const onSearchSubmit = async () => {
    try {
      const apiKey = '1cbda050cc90f10cb45481de7af875c0';

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=1&language=pt-BR`
      );

      const formattedMovies = response.data.results.slice(0, 12).map((movie) => {
        const releaseDateUTC = new Date(movie.release_date + "T00:00:00Z");
        const timezone = "America/Recife";
        const options = {
          year: 'numeric' as const,
          month: '2-digit' as const,
          day: '2-digit' as const,
          timeZone: timezone,
        };
        const formattedDate = releaseDateUTC.toLocaleDateString("pt-BR", options);
        const rating = parseFloat(movie.vote_average).toFixed(2);

        return {
          id: movie.id,
          image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          title: movie.title,
          description: movie.overview,
          release_date: formattedDate,
          rating: rating,
        };
      });

      setMoviesData(formattedMovies);
      Keyboard.dismiss();
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.searchBarContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          onSubmitEditing={onSearchSubmit}
          value={searchQuery}
        />
      </View>
      {/* Renderizando os cards com FlatList */}
      <FlatList
        data={moviesData}
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

export default SearchBar;
