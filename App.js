import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/Splash";
import LoginScreen from "./screens/Login";
import SigninScreen from "./screens/Signin";
import SigninScreen2 from "./screens/Signin2";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a delay to show the splash screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300); // Adjust the delay time as needed
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="SigninScreen"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SigninScreen2"
          component={SigninScreen2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
