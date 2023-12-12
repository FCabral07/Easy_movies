import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fixedContainer: {
    padding: 12,
    flexDirection: "row",
    backgroundColor: "#060d17",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emptyView: {
    flex: 1,
  },
  searchButton: {
    flex: 1,
    
    alignItems: 'flex-end'
  },
  appName: {
    color: "#FBC500",
    flex: 2,
    fontSize: 30,
    textAlign: "center",
  },
});

export default Styles;
