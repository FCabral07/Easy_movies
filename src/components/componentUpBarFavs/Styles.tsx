import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fixedContainer: {
    position: "absolute",
    marginTop: "0%",
    width: "100%",
    height: "12%",
    flexDirection: "row",
    zIndex: 1,
    backgroundColor: '#060d17'
  },
  iconContainer: {
    marginLeft: 85,
    marginTop: 66,
  },
  appName: {
    marginLeft: '31%',
    color:'#FBC500',
    marginTop: 60,
    fontSize: 30,
  }
});

export default Styles;
