// components/popularMoviesComponents/Styles.jsx
import { StyleSheet } from "react-native";

const filterModalStyles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 50,
    marginHorizontal: 60,
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
  },
  card: {
    width: "42%",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 4,
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  genre: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 10,
    color: "#888",
  },
});

export { filterModalStyles, popularMoviesStyles };
