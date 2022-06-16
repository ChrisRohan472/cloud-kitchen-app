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
const MealDetails = ({ navigation }) => {
  store.subscribe(() => {
    setSelectedId(store.getState().content.selected);
  });

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Famous Personality</Text>
      <List />
      <Button title="Close Menu" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );
  const [meal, setmeal] = React.useState({});
  React.useEffect(() => {
    async function fetch() {
      const addr = await axios.get("http://e333-165-225-120-84.ngrok.io/meal", {
        headers: {
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWEiLCJwYXNzd29yZCI6ImhlbGxvIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU1MjA2NzAwfQ.w2vTMFhP0Z1o5Of9237mn89r1O_Pq3VyKQo0oql1Ls8",
        },
      });
      if (addr.data[addr.data.length - 1] != undefined)
        setmeal(addr.data[addr.data.length - 1]);
    }

    fetch();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{"Todays Meal"}</Text>
      <Text style={styles.par}>
        {"Breakfast :" +
          (JSON.stringify(meal) === "{}"
            ? "Not Available Yet"
            : meal.Breakfast)}
      </Text>
      <Text style={styles.par}>
        {"Lunch  :" +
          (JSON.stringify(meal) === "{}" ? "Not Available Yet" : meal.Lunch)}
      </Text>
      <Text style={styles.par}>
        {"Dinner :" +
          (JSON.stringify(meal) === "{}" ? "Not Available Yet" : meal.Dinner)}
      </Text>
    </View>
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
    borderWidth: 2,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 7,
    fontSize: 35,
    textAlign: "center",
  },
  par: {
    padding: 7,
    fontSize: 20,
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

export default MealDetails;
