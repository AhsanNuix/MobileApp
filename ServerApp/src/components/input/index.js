import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default Input = ({ label, value, editable }) => {
  const [input, setInput] = useState(value ? value : "");
  return (
    <TextInput
      label={`${label}*`}
      theme={{
        colors: { primary: "#127cc0", placeholder: "#127cc0" },
        roundness: 30,
      }}
      value={input}
      mode="outlined"
      editable={editable === "undefined" ? true : editable}
      onChangeText={(input) => setInput(input)}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#edf4f8",
    marginVertical: 10,
  },
});