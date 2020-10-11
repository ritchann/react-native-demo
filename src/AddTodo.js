import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else Alert.alert("Название не может быть пустым");
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="Введите название..."
        value={value}
        onChangeText={setValue}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
      ></TextInput>
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
