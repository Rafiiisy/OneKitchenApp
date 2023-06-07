import React, { useEffect } from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
import { images } from "../assets/images/Images";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulating a 3-second duration for the splash screen
    const timer = setTimeout(() => {
      navigation.navigate("Login"); // Navigate to the login screen after the splash screen
    }, 30);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <LinearGradient
    //   colors={[colors.green1, colors.green2]}
    //   style={styles.container}
    // >
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image 
        source={images.logoWhite} 
        style={styles.logo} />
      </View>
    </SafeAreaView>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {},
  container: {
    height: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  logo: {
    width: 85*2,
    height: 120*2,
  },
  background: {
    width: 155,
    height: 155,
  },
});

export default SplashScreen;
