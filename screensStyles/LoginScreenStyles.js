import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#EFFFEC",
  },
  shapeContainer: {
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  circle: {
    backgroundColor: "green",
    top: -250,
    height: 450,
    width: 450,
    borderRadius: 300,
  },
  childContainer1: {
    top: "2%",
    width: "100%",
    height: 70,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    left: -10,
    marginBottom: 50,
    top: 20,
    width: 155,
    height: 155,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    textAlign: "left",
  },
  inputPassword: {
    height: 40,
    width: 250,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    textAlign: "right",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 0,
    top:8,
    textAlign: "left"
  },
  passwordToggleIcon: {
    paddingVertical: 0,
    width: 150,
    bottom: 9,
    left: 190,
  },
  loginButton: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 10,
    width: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 24,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  signupText: {
    color: "black",
  },
  signupLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default styles;