import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import Constants from "expo-constants";

export default function Leitor() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  const [value, setValue] = useState("");
  const [loaded, setLoaded] = useState(true);
  const navigate = useNavigation();
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
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
        <BarCodeScanner
          type={type}
          style={styles.cameraView}
          onBarCodeScanned={(e) => {
            setValue(e.data);
          }}
        />
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
    marginTop: Constants.statusBarHeight + 25,
  },
  valueText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cameraView: {
    marginTop: Constants.statusBarHeight + 25,
    height: 560,
    backgroundColor: "transparent",
  },
});
