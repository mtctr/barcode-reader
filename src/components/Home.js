import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

import Button from "./Button";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("Leitor")}>
        Abrir leitor
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
});
