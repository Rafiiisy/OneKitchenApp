import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import styles from "../screensStyles/SigninScreen2Styles";
import { push,ref, set } from "firebase/database";
import { db } from "../database/firebase";

const SigninScreen2 = ({ navigation, route }) => {
  const [HomeAddress, setHomeAddress] = useState("");
  const [City, setCity] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(""); 
  const { userId } = route.params;

 const dataAddon = async () => {
   const additionalData = {
     HomeAddress: HomeAddress,
     City: City,
     PhoneNumber: PhoneNumber,
   };

   try {
     const newAdditionalDataRef = push(
       ref(db, `userInfo/${userId}/signin2Data`)
     ); // Save in "userInfo/{userId}/signin2Data" folder
     const additionalDataId = newAdditionalDataRef.key;
     await set(newAdditionalDataRef, additionalData);
     setHomeAddress("");
     setCity("");
     setPhoneNumber("");
     navigation.navigate("SuccesfulSignup", {
       userId: userId,
       additionalDataId: additionalDataId,
     });
   } catch (error) {
     console.error("Error adding additional user data:", error);
   }
 };

  const handleExit = () => {
    navigation.navigate("SigninScreen");
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.childContainer1}>
        <View style={styles.exitContainer}>
          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.childContainer2}>
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.subheading}>We just need a bit more info</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Home Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Home Address"
            value={HomeAddress}
            onChangeText={(text) => setHomeAddress(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your City"
            value={City}
            onChangeText={(text) => setCity(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Phone Number"
            value={PhoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={dataAddon}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen2;
