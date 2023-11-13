import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#060d17",
    width: "100%",
    height: "185%",
    color: "#d5d5d5",
  },
  header: {
    alignItems: "center", // Centraliza o texto no meio
  },
  title: {
    marginTop: "17%",
    fontSize: 28,
    fontWeight: "bold",
    color: "#FBC500", // Cor do título
  },
  filterButton: {
    position: "absolute",
    marginTop: "15%",
    right: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
});

export default Styles;