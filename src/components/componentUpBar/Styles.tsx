import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fixedContainer: {
    position: "absolute",
    marginTop: "0%",
    width: "100%",
    height: "4%",
    flexDirection: "row",
    zIndex: 1,
  },
  iconContainer: {
    marginLeft: 85,
    marginTop: 65,
  },
  appName: {
    marginLeft: '31%',
    color:'#FBC500',
    marginTop: 55,
    fontSize: 30,
  }
});

export default Styles;
