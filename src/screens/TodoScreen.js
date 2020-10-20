import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color="#757575" title="Назад" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            color="#e53935"
            title="Удалить"
            onPress={() => console.log("remove")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});
