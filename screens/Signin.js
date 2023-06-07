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
import styles from "../screensStyles/SigninScreenStyles";
import { push, ref, set } from "firebase/database";
import { db } from "../database/firebase";

// import { getDatabase, ref, set } from "firebase/database";

const SigninScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("Driver");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // function to add the data to the realtime database
  const dataAddon = async () => {
    const user = {
      name: name,
      email: email,
      roles: roles,
      password: password,
    };

    try {
      const newUserRef = push(ref(db, "userInfo/signinData")); // Save in "userInfo/signinData" folder
      const userId = newUserRef.key;
      await set(newUserRef, user);
      setName("");
      setEmail("");
      setRoles("");
      setPassword("");
      navigation.navigate("SigninScreen2", { userId: userId });
    } catch (error) {
      console.error("Error adding user data:", error);
    }
  };
  const handleExit = () => {
    navigation.navigate("LoginScreen");
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
        <Text style={styles.subheading}>We want to know about you!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your e-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Roles</Text>
          <SelectDropdown
            data={["Driver", "Customer", "Merchant"]}
            onSelect={(selectedItem, index) => {
              setRoles(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText="Select Role"
            buttonStyle={styles.input}
            buttonTextStyle={[
              styles.dropdownButtonText,
              { color: "#a9a9a9", textAlign: "left", left: 10 },
            ]}
            dropdownStyle={styles.dropdown}
            rowStyle={styles.dropdownRow}
            rowTextStyle={[styles.dropdownRowText, { color: "black" }]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        {passwordError && (
          <Text style={styles.errorText}>
            Password and Confirm Password do not match!
          </Text>
        )}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={dataAddon}
        >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen;
