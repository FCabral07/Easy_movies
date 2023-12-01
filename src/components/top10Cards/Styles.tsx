import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  carouselItem: {
    width: 350,
    height: 550,
    borderRadius: 10,
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  text: {
    position: 'absolute',
    top: 20,
    color: '#FFFAFA',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  paginationDot: {
    width: 0,
    height: 0,
    borderRadius: 2,
    marginHorizontal: 18,
    backgroundColor: '#D8BFD8',
  },
  paginationInactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'lightblue',
  },
});

export default Styles;
