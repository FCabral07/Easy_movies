import { View } from "react-native"; // Import StyleSheet
import ComponentBar from "../../components/componentBar/ComponentBar";
import SearchBar from "../../components/searchBar/SearchBar";
import Styles from "./Styles";

const Search = (): JSX.Element => {
  return (
    <View style={Styles.container}>
      <View style={Styles.searchBarContainer}>
        <SearchBar/>
      </View>
      <ComponentBar />
    </View>
  );
};

export default Search;