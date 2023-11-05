import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  containerInit: {
    width: '60%',
    height: '40%',
    marginVertical: 450,
    marginHorizontal: 84,
    padding: 10
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
});

export default styles;
