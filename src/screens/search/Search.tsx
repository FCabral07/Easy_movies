// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native"; // Import StyleSheet
import ComponentBar from "../../components/componentBar/ComponentBar";
import SearchBar from "../../components/searchBar/SearchBar";
import Styles from "./Styles";

const Home = (): JSX.Element => {
//   const navigation = useNavigation();

//   const handleLoginClick = () => {
//     navigation.navigate("Home" as never);
//   };

  return (
    <View style={Styles.container}>
      <View style={Styles.searchBarContainer}>
        <SearchBar/>
      </View>
      <ComponentBar />
    </View>
  );
};

export default Home;
