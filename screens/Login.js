import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../screensStyles/LoginScreenStyles";
import { images } from "../assets/images/Images";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = { email, password };

    try {
      await AsyncStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigateToSigninScreen = () => {
    navigation.navigate("SigninScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.shapeContainer}>
        <View style={styles.circle} />
      </View>
      <Image source={images.logoColor} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Enter your E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <View style={styles.inputPassword}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.passwordToggleIcon}
          onPress={toggleShowPassword}
        >
          <Text>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account yet? </Text>
        <TouchableOpacity onPress={navigateToSigninScreen}>
          <Text style={styles.signupLink}>Sign up here</Text>
        </TouchableOpacity>
        {showLoading && (
          <View style={styles.activity}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
