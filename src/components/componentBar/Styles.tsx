import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fixedContainer: {
    position: "relative",
    marginBottom: "4%",
    width: "100%",
    marginLeft: "0%",
    height: "8%",
    borderTopColor: "#d5d5d5",
    borderTopWidth: 0.2,
    flexDirection: "row",
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
    backgroundColor: "#cc0000",
  },
});

export default Styles;
