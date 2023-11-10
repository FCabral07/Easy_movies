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
      title: "Filme 1",
      genre: "Ação",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Filme 2",
      genre: "Comédia",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Filme 3",
      genre: "Terror",
      image: "https://via.placeholder.com/300",
    },
    // Adicione mais filmes conforme necessário
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
