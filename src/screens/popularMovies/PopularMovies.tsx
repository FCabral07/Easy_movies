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
      genre: "Comédia",
      image: "https://image.tmdb.org/t/p/w500/j9mH1pr3IahtraTWxVEMANmPSGR.jpg",
    },
    {
      id: 2,
      title: "Muzzle",
      genre: "Comédia",
      image: "https://image.tmdb.org/t/p/w500/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
    },
    {
      id: 3,
      title: "The Marvels",
      genre: "Comédia",
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
  ];

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>Filmes Populares</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleIconClick}>
          <View style={Styles.arrowBack}>
            <IconMaterial
              name="arrow-back-ios"
              size={25}
              color="#F5F5F5"
              style={Styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* Utilizando MovieList com os dados de exemplo */}
        <MovieList movies={movies} />
      </ScrollView>

      <TouchableOpacity
        style={Styles.filterButton}
        onPress={() => setShowFilterOptions(true)}
      >
        <Ionicons name="ios-filter" size={24} color="white" />
      </TouchableOpacity>

      <FilterModal
        isVisible={showFilterOptions}
        onClose={() => setShowFilterOptions(false)}
      />
      <ComponentBar />
    </View>
  );
};

export default PopularMovies;
