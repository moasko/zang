import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function ContactUsScreen() {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/**application name*/}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#000",
        }}
      >
        Zangochap
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        version 1.0
      </Text>
      {/**application name*/}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 150,
            height: 150,
          }}
        />

        {/**copyright */}
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Tout droits réservés
      </Text>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL("tel:+2250757330000");
        }}
        style={styles.constacts}
      >
        <MaterialCommunityIcons name="phone" size={25} color="gray" />
        <Text style={styles.text}>+225 07 57 33 00 00</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL("tel:+2252521003875");
        }}
        style={styles.constacts}
      >
        <MaterialCommunityIcons name="phone" size={25} color="gray" />
        <Text style={styles.text}>+225 25 21 00 38 75</Text>
      </TouchableOpacity>
      <View style={styles.constacts}>
        <MaterialCommunityIcons name="email" size={25} color="gray" />
        <Text style={styles.text}>zangochap@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constacts: {
    backgroundColor: "#fff",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    width: "100%",
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
    color: "#000",
    fontSize: 15,
  },
});

export default ContactUsScreen;
