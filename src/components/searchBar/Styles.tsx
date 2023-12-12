import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#060d17",
    
    color: "#d5d5d5",
  },
  searchBarContainer: {
    backgroundColor: "#060d17",
    marginTop: 30,
  },
  moviesContainer: {
    paddingTop: '20%', // 10% de espaçamento no topo
    paddingHorizontal: '2%', // Espaçamento horizontal menor para os cards
  },
  cardContainer: {
    flex: 1,
    aspectRatio: 0.75, // Proporção de aspecto do card, ajuste conforme necessário
    marginVertical: '2%', // Espaçamento vertical entre os cards
    marginHorizontal: '1%', // Espaçamento horizontal menor entre os cards
    marginLeft: '-2%', // Margem negativa para compensar o espaço extra
  },
  customSearchBar: {
    borderRadius: 9, // Border radius
  }});

export default Styles;