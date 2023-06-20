import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "../screensStyles/HomeScreenStyles";

export default function App() {
  const deals = [
    {
      id: 1,
      image: require("./assets/HomeScreen/Deli-promo.png"),
      rating: 4.8,
      restaurant: "Resto 1",
    },
    {
      id: 2,
      image: require("./assets/HomeScreen/Ricebowl-promo.png"),
      rating: 4.7,
      restaurant: "Resto 2",
    },
  ];
  const imageDetails = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    // Add more objects for additional images
  ];

  // Calculate the total number of items needed for looping
  const totalItems = deals.length * 3;

  // Create an array with repeated items for looping effect
  const loopedDeals = Array.from(
    { length: totalItems },
    (_, index) => deals[index % deals.length]
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/HomeScreen/pattern.png")}
          style={styles.image}
        />
      </View>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Image
            source={require("./assets/HomeScreen/magnifyingglass.png")}
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>

        <View style={styles.locationContainer}>
          <Image
            source={require("./assets/HomeScreen/mappin.png")}
            style={styles.pinIcon}
          />
          <Text style={styles.textLocation}>Jl. Katio No.02</Text>
        </View>
      </View>

      <ScrollView style={styles.containerContent}>
        <View style={styles.imageStackContainer}>
          <Image
            source={require("./assets/HomeScreen/imgFood.png")}
            style={styles.imgFood}
          />
          <View style={styles.imageTextContainer}>
            <Text style={styles.imageTitle}>{imageDetails[0].title}</Text>
            <Text style={styles.imageDescription}>
              {imageDetails[0].description}
            </Text>
          </View>
        </View>
        <View style={styles.sideBySideImagesContainer}>
          <View style={styles.sideBySideImageContainer}>
            <Image
              source={require("./assets/HomeScreen/imgDeserts.png")}
              style={styles.sideBySideImage}
            />
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageTitle}>{imageDetails[1].title}</Text>
              <Text style={styles.imageDescription}>
                {imageDetails[1].description}
              </Text>
            </View>
          </View>
          <View style={styles.sideBySideImageContainer}>
            <Image
              source={require("./assets/HomeScreen/imgHealthy.png")}
              style={styles.sideBySideImage}
            />
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageTitle}>{imageDetails[2].title}</Text>
              <Text style={styles.imageDescription}>
                {imageDetails[2].description}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.horizontalViewContainerDeals}>
          <Text style={styles.horizontalViewTitle}>Deals</Text>
          <FlatList
            data={loopedDeals}
            horizontal
            pagingEnabled
            keyExtractor={(item, index) =>
              item.id.toString() + index.toString()
            } // Update the keyExtractor
            renderItem={({ item }) => (
              <View style={styles.dealItem}>
                <Image source={item.image} style={styles.dealImage} />
                <View style={styles.dealInfoContainer}>
                  <View style={styles.ratingContainer}>
                    <Image
                      source={require("./assets/HomeScreen/star.png")}
                      style={styles.starIcon}
                    />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                  <Text style={styles.restaurantText}>{item.restaurant}</Text>
                </View>
              </View>
            )}
            getItemLayout={(data, index) => ({
              length: 200,
              offset: 210 * index,
              index,
            })}
            initialScrollIndex={totalItems / 3}
          />
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.footerItem}>
          <Image
            source={require("./assets/HomeScreen/vector-home.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Image
            source={require("./assets/HomeScreen/searchvector.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Search</Text>
        </View>
        <View style={styles.footerItem}>
          <Image
            source={require("./assets/HomeScreen/vector-clock.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Orders</Text>
        </View>
        <View style={styles.footerItem}>
          <Image
            source={require("./assets/HomeScreen/vector-user.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

