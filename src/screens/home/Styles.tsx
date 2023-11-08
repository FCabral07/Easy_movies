import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#060d17",
    width: "100%",
    height: "200%",
    color: "#d5d5d5",
  },
  focus: {
    height: "14%",
    backgroundColor: "#transparent",
    borderRadius: 20,
    // overflow: "hidden",
  },
  imageFocus: {
    flex: 1,
    resizeMode: 'contain',
  },
  linearGradient: {
    // marginTop: 'auto',
    justifyContent: 'center',
    flex: 1,
  },
  buttonsContainer: {
    marginTop: '70%',
    flexDirection: "row",
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  buttonFavorite: {
    backgroundColor: "#F2C94C",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: '30%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDetails: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: '30%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "black",
    fontSize: 15,
  },
  films: {
    height: "10%",
    marginTop: "10%",
    backgroundColor: "#transparent",
  },
  top10: {
    height: "24%",
    marginTop: "10%",
    borderColor: "#ff1000",
    borderWidth: 1,
    backgroundColor: "#transparent",
  },
  newFilm: {
    height: "12%",
  },
  text: {
    color: "#fff",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,
  },
  // Navbar: {
  //   position: 'absolute',
  //   backgroundColor: '#fff',
  //   width: 'auto',
  //   height: '20%',
  // }
});

export default Styles;
