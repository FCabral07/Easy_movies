import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fixedContainer: {
    position: "absolute",
    marginTop: "200%",
    width: "100%",
    marginLeft: "0%",
    height: "8%",
    flexDirection: "row",
    backgroundColor: '#060d17'
  },
  iconContainer: {
    marginTop: "4%",
    flex: 1,
    alignItems: "center",
  },
  heartIcon: {
    position: "absolute",
    top: -30,
    left: 5,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#dbdbcc",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default Styles;
