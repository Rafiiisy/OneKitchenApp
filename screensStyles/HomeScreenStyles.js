import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "red",
  },
  imageContainer: {
    top: -80,
    backgroundColor: "#229C57",
  },
  header: {
    top: -210,
    height: 150,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    zIndex: 4,
  },
  containerContent: {
    flexGrow: 1,
    marginTop: -230,
    marginBottom: -210,
    // backgroundColor: "blue",
    backgroundColor: "#EFFFEC",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textLocation: {
    color: "#D1D5DB",
    fontSize: 20,
  },
  searchBar: {
    top: 45,
    width: 350,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFFFEC",
    borderRadius: 15,
    paddingHorizontal: 12,
    marginTop: 9,
  },
  searchInput: {
    fontSize: 20,
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  searchIcon: {
    left: 5,
    width: 20,
    height: 20,
    marginRight: 0,
  },
  locationContainer: {
    top: -60,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  pinIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  horizontalViewContainerDeals: {
    marginTop: "5%",
  },
  horizontalViewTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 40,
  },
  dealItem: {
    left: 15,
    width: 275,
    height: 200,
    marginRight: 16,
  },
  dealImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
  dealInfoContainer: {
    position: "absolute",
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  ratingText: {
    color: "#D1D5DB",
    fontSize: 20,
  },
  restaurantText: {
    color: "#D1D5DB",
    fontSize: 20,
    marginRight: 8, // Add margin for spacing
  },
  imageStackContainer: {
    left: 40,
    height: 200,
    width: 350,
    alignItems: "center",
    // backgroundColor:'green',
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
  },
  imgFood: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 30,
  },
  sideBySideImagesContainer: {
    top: 10,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: "space-between", // Add this to create a gap between images
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40, // Add this to create a gap between images and the next container
  },
  sideBySideImage: {
    height: 150,
    width: 170,
    borderRadius: 30,
  },

  imageTextContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  imageTitle: {
    color: "white",
    fontSize: 25,
    marginBottom: 4,
    fontWeight: "bold",
  },
  imageDescription: {
    color: "white",
    fontSize: 14,
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "top",
    paddingHorizontal: 40,
    paddingVertical: 10,
    height: 100,
    backgroundColor: "#E5E5E5",
    top: 40,
  },
  footerItem: {
    alignItems: "center",
    top: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
