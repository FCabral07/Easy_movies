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
  label: {
    color: "#848484",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputContainer: {
    marginTop: 5,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: '#FFF0F5',
    borderRadius: 6,
    paddingLeft: 8
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  createAccountForgot: {
    flexDirection: "row",
    marginBottom: "4%",
    marginTop: "3%",
  },
  link: {
    color: "#F5F5F5",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    position: 'relative',
    alignItems: "center",
    marginTop: "50%",
  },
  text: {
    fontSize: 28,
    color: '#000',
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
});

export default Styles;
