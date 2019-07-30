import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import AutoHeightImage from "react-native-auto-height-image";
import Bottom from "./screen/bottom";

export default function App() {
  const imgData = [
    { id: 1, imgSource: require("./assets/1.jpg") },
    { id: 2, imgSource: require("./assets/2.jpg") },
    { id: 3, imgSource: require("./assets/3.jpg") },
    { id: 4, imgSource: require("./assets/4.jpg") },
    { id: 5, imgSource: require("./assets/5.jpg") },
    { id: 6, imgSource: require("./assets/6.jpg") },
    { id: 7, imgSource: require("./assets/7.jpg") },
    { id: 8, imgSource: require("./assets/8.jpg") }
  ];
  const centerOfImgDate = imgData.length / 2;

  function showAlert1() {
    Alert.alert(
      "Alert",
      "You've just followed this handsome guy!",
      [{ text: "Cool!" }],
      { cancelable: false }
    );
  }
  function showAlert2() {
    Alert.alert(
      "Alert",
      "The messages has been sent to this user!",
      [{ text: "Ok!" }],
      { cancelable: false }
    );
  }
  function createImage(item) {
    return (
      <AutoHeightImage
        key={item.id}
        source={item.imgSource}
        style={styles.img}
        width={150}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 0.5, alignItems: "flex-start", left: 10 }}>
          <TouchableOpacity style={[styles.btn, styles.floatingButton]}>
            <MaterialIcons name="keyboard-arrow-left" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, alignItems: "flex-end", right: 10 }}>
          <TouchableOpacity style={[styles.btn, styles.floatingButton]}>
            <MaterialIcons name="filter-center-focus" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infor}>
        <Image source={require("./assets/1.jpg")} style={styles.avatar} />
        <View
          style={{
            flexDirection: "column",
            left: 10
          }}
        >
          <Text style={{ fontSize: 18, color: "rgb(51,60,87)" }}>
            LUCY EVAJO
          </Text>
          <Text style={{ fontSize: 14, color: "#666" }}>Developer</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[styles.btn, styles.buttonFollow]}
              onPress={() => showAlert1()}
            >
              <Text style={{ color: "white", fontSize: 12 }}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.buttonSend]}
              onPress={() => showAlert2()}
            >
              <MaterialIcons name="send" size={12} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countArea}>
        <View style={styles.counterContainer}>
          <Text style={styles.numCount}>{imgData.length}</Text>
          <Text style={styles.wordCount}>Photos</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.numCount}>15K</Text>
          <Text style={styles.wordCount}>Followers</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.numCount}>1</Text>
          <Text style={styles.wordCount}>Following</Text>
        </View>
      </View>
      <View style={styles.imageArea}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View>
            {imgData.slice(0, centerOfImgDate).map(item => createImage(item))}
          </View>
          <View>
            {imgData.slice(centerOfImgDate).map(item => createImage(item))}
          </View>
        </ScrollView>
      </View>
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    top: 22
  },
  infor: {
    flex: 0.2,
    flexDirection: "row",
    top: 15,
    justifyContent: "center"
  },
  buttonFollow: {
    top: 5,
    width: 80,
    height: 20,
    alignItems: "center",
    color: "white",
    backgroundColor: "rgb(71,113,246)"
  },
  buttonSend: {
    top: 5,
    marginLeft: 10,
    width: 55,
    height: 20,
    backgroundColor: "rgb(120,213,250)"
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    right: 20
  },
  floatingButton: {
    width: 30,
    backgroundColor: "white"
  },

  btn: {
    shadowOffset: { width: 20, height: 20 },
    shadowColor: "black",
    shadowOpacity: 2,
    elevation: 3,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  countArea: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  numCount: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wordCount: {
    fontSize: 12,
    color: "rgb(51,60,87)"
  },

  counterContainer: {
    flex: 0.33,
    alignItems: "center"
  },
  img: {
    borderRadius: 20,
    margin: 5
  },

  imageArea: {
    flex: 0.65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
