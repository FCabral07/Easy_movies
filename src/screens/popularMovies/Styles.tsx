import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#060d17",
    width: "100%",
    height: "300%",
    color: "#d5d5d5",
  },
  header: {
    alignItems: "center", // Centraliza o texto no meio
  },
  title: {
    marginTop: "17%",
    fontSize: 28,
    fontWeight: "bold",
    color: "#FBC500", // Cor do título principal
  },
  sortButton: {
    backgroundColor: "#f0f0f0", // Fundo cinza-claro
    padding: 10, // Espaçamento interno
    position: "absolute",
    right: 10,
    top: 60,
    borderRadius: 5, // Bordas arredondadas
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    flexDirection: "row", // Ícones e textos em linha
    margin: 5, // Margem externa
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 0, height: 1 }, // Deslocamento da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 1.5, // Raio da sombra
  },
});

export default Styles;
