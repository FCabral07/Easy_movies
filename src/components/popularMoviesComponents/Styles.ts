// components/popularMoviesComponents/Styles.tsx
import { StyleSheet } from "react-native";

const filterModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
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
    backgroundColor: "#060d17", // Cor de fundo
  },
  card: {
    width: "30%", // Exibe 3 filmes por linha
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 4,
    backgroundColor: "#333", // Cor de fundo do card
  },
  image: {
    height: 200,
    resizeMode: "cover", // Ajusta a imagem dentro do container
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "#FBC500", // Cor do título
  },
  genre: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 10,
    color: "#888",
  },
});

export { filterModalStyles, popularMoviesStyles };
