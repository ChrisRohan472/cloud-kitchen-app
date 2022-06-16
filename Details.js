import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SwitchExample({ navigation }) {
  const [d, sd] = useState("");
  useEffect(() => {
    data();
  }, []);
  function data() {
    const axios = require("axios");
    const options = {
      method: "POST",
      url: "http://e333-165-225-120-84.ngrok.io/api/auth/login",
      data: { username: "rama", password: "hello" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.user.email);
        sd(response.data.user);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{"Email: " + d.email}</Text>
      <Text style={styles.textStyle}>{"Username: " + d.username}</Text>
      <Text style={styles.textStyle}>
        {"IsAdmin: " + (d.isAdmin ? "Yes" : "No")}
      </Text>
      <Text style={styles.textStyle}>{"Created At: " + d.createdAt}</Text>
      <Button
        title="FeedBack"
        onPress={() => {
          navigation.navigate("Feedback");
        }}
      />
      <Button
        title="Meal Details"
        onPress={() => {
          navigation.navigate("Meal Details");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    margin: 24,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: "#344953",
    justifyContent: "center",
  },
});
