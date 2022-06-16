import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Picker,
} from "react-native";
import DataList from "./DataList";
import List from "./LIst";
import store from "./redux";
import axios from "axios";
const Feedback = ({ navigation }) => {
  const drawer = useRef(null);
  const [message, setmessage] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  store.subscribe(() => {
    setSelectedId(store.getState().content.selected);
  });
  const data = async (str) => {
    const input = {
      Feedback: str,
      user: "rama",
    };

    const data = await axios.post(
      "http://e333-165-225-120-84.ngrok.io/addFeedback",
      input,
      {
        headers: {
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWEiLCJwYXNzd29yZCI6ImhlbGxvIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU1MjA2NzAwfQ.w2vTMFhP0Z1o5Of9237mn89r1O_Pq3VyKQo0oql1Ls8",
        },
      }
    );
    if (data.status == 200) setmessage(data.data);
  };
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Famous Personality</Text>
      <List />
      <Button title="Close Menu" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Feedback Message"
        />
        <Button
          title="Send Feedback"
          onPress={() => {
            data(number);
            onChangeNumber("");
          }}
        />

        <Text>{message}</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
    marginTop: 5,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 7,
    fontSize: 35,
    textAlign: "center",
  },
  input: {
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    borderColor: "#bbbbbb",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Feedback;
