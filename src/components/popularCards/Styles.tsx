import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  cardContainer: {
    width: 250,
    height: 300,
    padding: 0,
    margin: 0,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardStyle: {
    overflow: "hidden",
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  containerModal: {
    backgroundColor: '#180806',
    width: '100%',
    height: '90%',
    marginTop: '5%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageModal: {
    width: '100%',
    height: '30%',
    margin: 0
  },
  textTitleContainer: {
    alignItems: 'center',
  },
  textTitleModal: {
    color: '#FBC500',
    fontSize: 30,
    marginTop: 15,
    fontWeight: 'bold'
  },
  iconModal: {
    position: 'absolute',
    top: 15,
    right: 20
  },
  textDescriptionContainer: {
    color: '#d5d5d5',
    margin: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  textDescriptionModel: {
    color: '#d5d5d5',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default Styles;
