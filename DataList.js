import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from "react-native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const showToastWithGravityAndOffset = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Opening Browser!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
const DataList = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        showToastWithGravityAndOffset();
        Linking.openURL(item.link);
      }}
    >
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },
  item: {
    backgroundColor: "#dddddd",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "100%",
  },
  title: {
    fontSize: 20,
  },
});

export default DataList;
