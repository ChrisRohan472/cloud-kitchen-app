import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import Drawer from "./Drawer";

export default function App() {
  const [text, setText] = useState("");
  return (
    <>
      <Drawer />
    </>
    // <View style={{ padding: 10 }}>
    // <TextInput
    //   style={{ height: 40, marginTop: 100 }}
    //   placeholder="Type here to translate!"
    //   onChangeText={(newText) => setText(newText)}
    //   defaultValue={text}
    // />
    //   <Button title="Clear" onPress={() => setText("")} />
    //   <Text style={{ padding: 10, fontSize: 42 }}>{text}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
