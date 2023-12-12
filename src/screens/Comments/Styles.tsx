import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060d17",
    padding: 16,
  },
  keyboardingAvoidingView: {
    flex: 1,
    paddingBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#060d17",
  },
  title: {
    color: "#FBC500",
    fontSize: 30,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute", // Position the back button absolutely
    left: 0,
    padding: 8,
    borderRadius: 8,
  },
  commentContainer: {
    marginBottom: 16,
  },
  username: {
    color: "#FBC500",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "#d5d5d5",
    fontSize: 14,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#374151",
    color: "#d5d5d5",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#FBC500",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Styles;
