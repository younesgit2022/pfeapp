import React from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

export default function TextInput({ icon, error, touched, ...otherProps }) {
  const validationColor = !touched ? "#999999" : error ? "#FF5A5F" : "#999999";
  return (
    <View
      style={{
        backgroundColor: "#eef2f3",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderRadius: 30,
        borderColor: validationColor,
        borderWidth: 1,
        padding: 8,
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          style={{ fontSize: 14 }}
          underlineColorAndroid="#f000"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
        />
      </View>
    </View>
  );
}
