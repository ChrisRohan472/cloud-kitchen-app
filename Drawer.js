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
const Drawer = ({ navigation }) => {
  let DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Elon Musk",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Jeff Bezos",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Chris Rohan",
    },
  ];
  const drawer = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const [datas, setdata] = useState({});
  const [number, onChangeNumber] = React.useState("");
  store.subscribe(() => {
    setSelectedId(store.getState().content.selected);
  });
  //   useEffect(() => {
  //     datas.map((data) => {
  //       let d = {
  //         id: data.link,
  //         title: data.title,
  //       };
  //       DATA.push(d);
  //     });
  //   });
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Famous Personality</Text>
      <List />
      <Button title="Close Menu" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );
  const print = () => {
    switch (selectedId) {
      case "1":
        drawer.current.closeDrawer();
        data("Jeff Bezos");
        break;
      case "2":
        drawer.current.closeDrawer();
        data("Elon Musk");
        break;

      case "3":
        drawer.current.closeDrawer();
        data("Messi");
        break;

      default:
        data("Breaking News");
        break;
    }
  };
  useEffect(() => {
    print();
  }, [selectedId]);
  const data = (str) => {
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: str, lang: "en" },
      headers: {
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
        "X-RapidAPI-Key": "f0aec3dfdcmsh08604cf6b132fd2p18f93cjsn88d9c998e202",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        setdata(response.data.articles);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
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
          placeholder="Search"
        />
        <Button
          title="Search"
          onPress={() => {
            data(number);
            onChangeNumber("");
          }}
        />
        <Button
          title="Go to User Details"
          onPress={() => navigation.navigate("User Details")}
        />

        <DataList data={datas} />
        <Button title="Menu" onPress={() => drawer.current.openDrawer()} />

        {/* <Text> {JSON.stringify(datas)}</Text> */}
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

export default Drawer;
