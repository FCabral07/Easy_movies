import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fixedContainer: {
    position: "relative",
    marginBottom: "4%",
    width: "100%",
    marginLeft: "0%",
    height: "8%",
    borderTopColor: "#fff",
    borderTopWidth: 1,
    flexDirection: "row",
  },
  iconContainer: {
    marginTop: "4%",
    flex: 1,
    alignItems: "center",
  },
  heartIcon: {
    position: "absolute", // Define o ícone do coração como posição absoluta
    top: -30, // Ajusta a posição vertical para que fique acima do container
    left: 5, // Ajusta a posição horizontal se necessário
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
});

export default Styles;
