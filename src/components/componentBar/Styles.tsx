import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fixedContainer: {
    position: "absolute",
    marginTop: "196%",
    width: "100%",
    marginLeft: "0%",
    height: "6%",
    flexDirection: "row",
    zIndex: 1,
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
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbc500",
  },
});

export default Styles;
