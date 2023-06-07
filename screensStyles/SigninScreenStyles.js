import { StyleSheet,PixelRatio } from "react-native";

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#EFFFEC",
  },
  childContainer1: {
    top: -120,
    width: "100%",
    height: 50,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  height: 600,
  childContainer2: {
    top: -100,
    width: "100%",
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
    marginBottom: 15,
    backgroundColor: "transparent",
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    color: "green",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "green",
    borderWidth: 3,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    textAlign: "left",
    backGroundColor: "transparent",
  },
  nextButton: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 10,
    height: 50,
    width: 150,
    top: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
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
    width: 300,
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