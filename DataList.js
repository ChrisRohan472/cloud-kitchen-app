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
  Image,
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
      <View style={{ backgroundColor: "#dddddd", margin: 8 }}>
        <Image
          style={styles.stretch}
          source={{
            uri: item.media,
          }}
        />
        <Item title={item.title} />
      </View>
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
  },
  title: {
    fontSize: 20,
  },
  tinyLogo: {
    padding: 30,
    alignSelf: "center",
    backgroundColor: "#dddddd",
    width: 50,
    height: 50,
  },
  stretch: {
    padding: 20,
    width: "100%",
    height: 200,
    resizeMode: "stretch",
  },
});

export default DataList;
