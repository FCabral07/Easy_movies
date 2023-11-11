import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#060d17",
    width: "100%",
    height: "100%",
    color: "#d5d5d5",
  },
  header: {
    backgroundColor: "#333",
    alignItems: "center", // Centraliza o texto no meio
    paddingVertical: 10, // Adiciona um espaçamento vertical
  },
  title: {
    marginTop: 40,
    fontSize: 38,
    fontWeight: "bold",
    color: "#FBC500", // Cor do título
  },
  filterButton: {
    position: "absolute",
    top: 40,
    right: 10,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  iconContainer: {
    marginTop: "4%",
    flexDirection: "row", // Alinha os ícones na mesma linha
    justifyContent: "space-between", // Distribui o espaço entre os ícones
  },
  arrowBack: {
    marginTop: "20%",
    marginLeft: "7%",
  },
  icon: {
    marginRight: 30,
  },
});

export default Styles;
