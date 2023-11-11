// components/popularMoviesComponents/Styles.jsx
import { StyleSheet } from "react-native";

const filterModalStyles = StyleSheet.create({
  // Container que abre quando clicar no botão do filtro
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 50,
    marginHorizontal: 60,
    borderRadius: 10,
    elevation: 5,
  },
  //Texto "Filtrar por" dentro container
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "stretch",
    alignItems: "center",
  },
});

const popularMoviesStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 60,
    marginLeft: "5%", // Adicionado margem à esquerda para centralizar
  },
  card: {
    width: "80%", // Alterado para 48% para acomodar dois cards por linha
    //height: "50%",
    borderRadius: 5,
    overflow: "hidden",
    height: "80%",
    //marginBottom: 20,
    //elevation: 4,
  },
  image: {
    height: "60%", // Alterado para 60% para preencher mais a altura
    width: "100%", // Alterado para 100% para preencher a largura do container
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  genre: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    color: "#888",
  },
});

export { filterModalStyles, popularMoviesStyles };
