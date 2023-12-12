// components/popularMoviesComponents/Styles.jsx
import { StyleSheet } from "react-native";

const popularMoviesStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "8%",
    marginHorizontal: "0%",
  },
  card: {
    width: "100%",
    height: "4%",
    padding: 50,
    marginBottom: "4%",
    paddingHorizontal: 0,
    paddingTop: 20,
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  title: {
    marginVertical: "4%",
    color: "#FFFAFA",
    fontSize: 17,
    fontWeight: "bold",
  },
  genre: {
    marginTop: "1%",
    color: "#FFFAFA",
    fontSize: 16,
  },
  voteAverage: {
    marginBottom: 30,
    fontSize: 16,
    color: "red",
  },
  favoriteIcon: {
    position: "absolute",
    top: 25,
    left: 10,
  },
});

export { popularMoviesStyles };
