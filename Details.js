import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class SwitchExample extends Component {
  state = {
    choosenIndex: 0,
    language: "ta",
    data: "",
  };
  print = () => {
    return this.state.language;
  };

  data(str) {
    const axios = require("axios");

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "How are you");
    encodedParams.append("target", str);
    encodedParams.append("source", "en");

    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        "X-RapidAPI-Key": "f0aec3dfdcmsh08604cf6b132fd2p18f93cjsn88d9c998e202",
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.translations[0].translatedText);
        ToastAndroid.showWithGravityAndOffset(
          response.data.data.translations[0].translatedText,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Destination Language</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemPosition) =>
            this.setState({ language: itemValue, choosenIndex: itemPosition })
          }
        >
          <Picker.Item label="Tamil" value="ta" />
          <Picker.Item label="Telugu" value="te" />
          <Picker.Item label="Malayalam" value="ml" />
        </Picker>

        <Text style={styles.textStyle}>{"English to " + this.print()}</Text>
        <Text style={styles.textStyle}>{this.data(this.state.language)}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
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
