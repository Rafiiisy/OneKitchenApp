import { StyleSheet,PixelRatio } from "react-native";

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#EFFFEC",
    marginBottom:20,
  },
  childContainer1: {
    top: -150,
    width: "100%",
    height: 50,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    zIndex:1
  },
  childContainer2: {
    top: -100,
    width: "100%",
    height: 400,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  exitContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  exitButton: {
    borderRadius: 10,
    padding: 10,
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    color: "green",
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "green",
    borderWidth: 3,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    textAlign: "left",
  },
  nextButton: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 10,
    width: 200,
    top: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  dropdownButtonText: {
    color: "black",
    fontSize: 16,
  },
  dropdown: {
    borderColor: "green",
    borderWidth: 1,
    width: 250,
    marginTop: 8,
    maxHeight: 150,
    borderRadius: 4,
  },
  dropdownRow: {
    backgroundColor: "white",
    padding: 12,
  },
  dropdownRowText: {
    fontSize: 16,
    color: "black",
  },
});

export default styles;