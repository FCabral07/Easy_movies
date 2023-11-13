import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FilterModal from "../../components/popularMoviesComponents/FilterModal";
import { MovieList } from "../../components/popularMoviesComponents/PopularMoviesComponents";
import Styles from "./Styles";
import ComponentBar from "../../components/componentBar/ComponentBar";

const Favorite: React.FC = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  // Dummy data para testar o MovieList
  const movies = [
    {
      id: 1,
      title: "Oppenheimer",
      genre: "Suspense/Thriller",
      image: "https://www.atoupeira.com.br/wp-content/uploads/2023/05/oppenheimer-novo-poster.jpg",
    },
    {
      id: 2,
      title: "Flamengo Hexa",
      genre: "Documentário",
      image: "https://mundorubronegro.com/wp-content/uploads/2021/05/D_NQ_NP_803437-MLB25847302024_082017-W.jpg",
    },
    {
      id: 3,
      title: "Até que a Sorte Nos Separe",
      genre: "Comédia/Drama",
      image: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/00/1100145_ate-que-a-sorte-nos-separe-dvd-filme-comedia-ms_m1_637383480830896029.jpg",
    },
    {
      id: 4,
      title: "Bad Boys para Sempre",
      genre: " Ação/Comédia",
      image: "https://cinema10.com.br/upload/filmes/filmes_10626_images.jpg?default=poster",
    },
    {
      id: 5,
      title: "Antebellum",
      genre: "Terror/Drama",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQwEd-mLPsOXJB8ynsFUJlWPogv6KnWinYw&usqp=CAU",
    },
    {
      id: 6,
      title: "Sorria",
      genre: "Terror/Curta-metragem",
      image: "https://oregional.com.br/media/blog/2bf59dc56babcae454499402a9e170c2.jpg",
    }
  ];

  return (
    <View style={Styles.container}>
      <ScrollView
        contentContainerStyle={Styles.container}
        indicatorStyle="white"
        style={{ zIndex: 0 }}
      >
        <View style={Styles.header}>
          <Text style={Styles.title}>Favoritos</Text>
        </View>
        <TouchableOpacity
          style={Styles.filterButton}
          onPress={() => setShowFilterOptions(true)}
        >
          <Ionicons name="ios-filter" size={24} color="white" />
        </TouchableOpacity>
        <View>
          <MovieList movies={movies} />
        </View>

        <FilterModal
          isVisible={showFilterOptions}
          onClose={() => setShowFilterOptions(false)}
        />
      </ScrollView>
      <ComponentBar />
    </View>
  );
};

export default Favorite;