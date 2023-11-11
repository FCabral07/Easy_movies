// components/popularMoviesComponents/Styles.jsx
import { StyleSheet } from "react-native";

const filterModalStyles = StyleSheet.create({
  // Container que abre quando clicar no botão do filtro
  modalContainer: {
    backgroundColor: "#fff",
    padding: 30,
    marginVertical: 50,
    marginHorizontal: 60,
    borderRadius: 20,
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
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "2%",
  },
  card: {
    width: 195,
    height: 400,
    padding: 50,
    marginBottom: "4%",
    paddingHorizontal: 0,
    paddingTop: 20,
    marginHorizontal: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
    marginTop: "1%",
    color: "#FFFAFA",
    fontSize: 17,
    fontWeight: "bold",
  },
  genre: {
    textAlign: "center",
    marginTop: "1%",
    color: "#FFFAFA",
    fontSize: 16,
  },
});

export { filterModalStyles, popularMoviesStyles };
