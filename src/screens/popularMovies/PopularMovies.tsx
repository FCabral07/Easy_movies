// PopularMovies.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FilterModal from "../../components/popularMoviesComponents/FilterModal";
import { MovieList } from "../../components/popularMoviesComponents/PopularMoviesComponents";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Styles from "./Styles";
import ComponentBar from "../../components/componentBar/ComponentBar";
import IconAwesome from "react-native-vector-icons/FontAwesome5";

const PopularMovies: React.FC = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const navigation = useNavigation();

  const handleIconClick = () => {
    navigation.navigate("PopularMovies" as never);
  };

  // Dummy data para testar o MovieList
  const movies = [
    {
      id: 1,
      title: "Five Nights at Freddy's",
      genre: "Terror/Comédia",
      image: "https://image.tmdb.org/t/p/w500/j9mH1pr3IahtraTWxVEMANmPSGR.jpg",
    },
    {
      id: 2,
      title: "Muzzle",
      genre: "Drama/Aventura",
      image: "https://image.tmdb.org/t/p/w500/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
    },
    {
      id: 3,
      title: "The Marvels",
      genre: "Aventura/Comédia",
      image: "https://image.tmdb.org/t/p/w500/tUtgLOESpCx7ue4BaeCTqp3vn1b.jpg",
    },
    {
      id: 4,
      title: "The Nun II",
      genre: "Terror",
      image: "https://image.tmdb.org/t/p/w500/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    },
    {
      id: 5,
      title: "The Exorcist: Believer",
      genre: "Terror",
      image: "https://image.tmdb.org/t/p/w500/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg",
    },
    {
      id: 6,
      title: "Sound of Freedom",
      genre: "Drama",
      image: "https://image.tmdb.org/t/p/w500/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
    },
    {
      id: 7,
      title: "Boudica",
      genre: "Ação",
      image: "https://image.tmdb.org/t/p/w500/ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg",
    },
    {
      id: 8,
      title: "Fast X",
      genre: "Ação",
      image: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    },
    {
      id: 9,
      title: "The Equalizer 3",
      genre: "Ação",
      image: "https://image.tmdb.org/t/p/w500/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    },
    {
      id: 10,
      title: "Saw X",
      genre: "Terror",
      image: "https://image.tmdb.org/t/p/w500/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    },
  ];

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

export default PopularMovies;
