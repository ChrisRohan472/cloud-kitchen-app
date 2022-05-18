import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import Drawer from "./Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwitchExample from "./Details";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News App">
        <Stack.Screen name="News App" component={Drawer} />
        <Stack.Screen name="Details" component={SwitchExample} />
      </Stack.Navigator>
    </NavigationContainer>
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
