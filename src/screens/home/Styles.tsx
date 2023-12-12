import { StyleSheet, Dimensions } from "react-native";

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
  },
  imageFocus: {
    flex: 1,
    resizeMode: "contain",
  },
  linearGradient: {
    justifyContent: "center",
    flex: 1,
  },
  buttonsContainer: {
    marginTop: "70%",
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  buttonFavorite: {
    backgroundColor: "#F2C94C",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: "30%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDetails: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: "30%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: 'bold'
  },
  films: {
    height: "10%",
    marginTop: "10%",
    backgroundColor: "#transparent",
  },
  top10: {
    height: "18%",
    marginTop: "10%",
    backgroundColor: "#transparent",
  },
  newFilm: {
    height: "12%",
  },
  top10text: {
    height: "8%",
  },
  rowMovies: {
    width: 340,
    height: 550,
    justifyContent: "center",
    marginLeft: 18,
    marginTop: 0,
  },
  text: {
    color: "#fff",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: '500'

  },
  containerModal: {
    backgroundColor: "#180806",
    width: "100%",
    height: "90%",
    marginTop: "5%",
    borderRadius: 20,
    overflow: "hidden",
  },
  imageModal: {
    width: "100%",
    height: "30%",
    margin: 0,
  },
  textTitleContainer: {
    alignItems: "center",
  },
  textTitleModal: {
    color: "#FBC500",
    fontSize: 30,
    marginTop: 15,
    fontWeight: "bold",
  },
  iconModal: {
    position: "absolute",
    top: 15,
    right: 20,
  },
  textDescriptionContainer: {
    color: "#d5d5d5",
    marginLeft: 15,
    marginVertical: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  textDescriptionModel: {
    color: "#d5d5d5",
    fontSize: 12,
    marginHorizontal: 15,
    lineHeight: 14,
    textAlign: "justify",
  },
  generalContainer: {
    marginVertical: 40,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  ratingContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  averageScore: {
    flexDirection: "row",
    width: 80,
    justifyContent: "center",
    marginTop: 5,
  },
  textContainer: {
    color: "#d5d5d5",
    fontSize: 14,
    fontWeight: "bold",
  },
  numberRatingContainer: {
    color: "#d5d5d5",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "justify",
    marginHorizontal: 5,
    marginVertical: 4,
  },
  releaseDateContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  dateContainer: {
    flexDirection: "row",
    width: 136,
    justifyContent: "center",
    marginVertical: 6,
  },
  date: {
    color: "#d5d5d5",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "justify",
    marginHorizontal: 5,
    marginVertical: 4,
  },
  // Navbar: {
  //   position: 'absolute',
  //   backgroundColor: '#fff',
  //   width: 'auto',
  //   height: '20%',
  // }
  floatingButton: {
    position: "absolute",
    bottom: Dimensions.get("screen").height + 100,
    right: 20,
    backgroundColor: "#FBC500", // Replace with your desired background color
    borderRadius: 30,
    padding: 15,
    elevation: 5, // For shadow on Android
    zIndex: 1,
  },
});

export default Styles;
