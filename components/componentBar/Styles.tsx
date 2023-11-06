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
    position: "absolute",
    top: -30,
    left: 5,
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
