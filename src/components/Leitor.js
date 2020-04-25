import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import Constants from "expo-constants";

export default function Leitor() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [value, setValue] = useState("");
  const [codeType, setCodeType] = useState("");
  const [loaded, setLoaded] = useState(true);
  const navigate = useNavigation();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
      {loaded && (
        <Camera
          type={type}
          style={styles.cameraView}
          onBarCodeScanned={(e) => {
            setValue(e.data);
            setCodeType(e.type);
          }}
        ></Camera>
      )}
      <View style={styles.container}>
        <Text style={styles.valueText}>Valor: {value}</Text>
      </View>
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
    marginTop: Constants.statusBarHeight + 50,
  },
  valueText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cameraView: {
    height: 600,
    backgroundColor: "transparent",
  },
});
