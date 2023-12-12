import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    padding: 40,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  inputContainer: {
    marginTop: 0,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingLeft: 8,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#f5f5f5",
  },
  logo: {
    position: 'relative',
    alignItems: "center",
    marginTop: "35%",
  },
  text: {
    fontSize: 28,
    color: '#f5f5f5',
  },
  scrollContainer: {
    width: "100%",
  },
  button: {
    position: 'relative',
    backgroundColor: '#F5F5F5',
    width: '60%',
    height: '8%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: '18%',
    zIndex: 9999,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 9999,
  },
  arrowBack: {
    position: 'absolute',
    marginTop: 14
  }
});

export default Styles;
