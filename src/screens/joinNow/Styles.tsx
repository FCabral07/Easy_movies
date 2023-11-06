import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  text: {
    color: '#FFFFF0',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '75%',
    zIndex: 9999,
  },
  button: {
    position: 'relative',
    backgroundColor: '#FFFFF0',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    zIndex: 9999,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 9999,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  containerInit: {
    width: '60%',
    height: '40%',
    marginVertical: 450,
    marginHorizontal: 84,
    padding: 10
  }
});

export default styles;
