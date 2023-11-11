import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Styles from './Styles';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={Styles.searchBarContainer}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
    

  );
};

export default SearchBar;
