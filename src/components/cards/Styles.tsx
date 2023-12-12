import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 250,
    padding: 0,
    marginTop: "2%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,

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
    marginLeft: 15,
    marginVertical: 8,
    fontSize: 20,
    fontWeight: "bold"
  },
  textDescriptionModel: {
    color: '#d5d5d5',
    fontSize: 12,
    marginHorizontal: 15,
    lineHeight: 14,
    textAlign: 'justify',
  },
  generalContainer:{
    marginVertical: 40,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  ratingContainer:{
    flex: 1,
    alignItems: 'flex-start',
  },
  averageScore:{
    flexDirection: 'row',
    width: 80,
    justifyContent: 'center',
    marginTop: 5
  },
  textContainer:{
    color: '#d5d5d5',
    fontSize: 14,
    fontWeight: 'bold',
  },
  numberRatingContainer:{
    color: '#d5d5d5',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'justify',
    marginHorizontal: 5,
    marginVertical: 4
  },
  releaseDateContainer:{
    flex: 1,
    alignItems: 'flex-end'
  },
  dateContainer:{
    flexDirection: 'row',
    width: 136,
    justifyContent: 'center',
    marginVertical: 6
  },
  date:{
    color: '#d5d5d5',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'justify',
    marginHorizontal: 5,
    marginVertical: 4
  },
});

export default Styles;
