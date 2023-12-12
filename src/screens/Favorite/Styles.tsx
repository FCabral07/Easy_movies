import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060d17'
    // Estilos para o container principal
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
  componentBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // Estilos para fixar o ComponentBar na parte inferior
  },
});

export default Styles;