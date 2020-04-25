import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Button({ onPress, children }) {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  buttonStyle: {
    height: 50,
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "#fafafa",
    borderRadius: 5,
    borderWidth: 0,
    marginLeft: 5,
    marginRight: 5,
  },
};
