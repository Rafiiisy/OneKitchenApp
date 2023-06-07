import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ViewJSONDataScreen = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("userInfo");
      if (jsonValue !== null) {
        setJsonData(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <View>
      {jsonData ? (
        <Text>{JSON.stringify(jsonData)}</Text>
      ) : (
        <Text>No JSON data found.</Text>
      )}
    </View>
  );
};

export default ViewJSONDataScreen;
