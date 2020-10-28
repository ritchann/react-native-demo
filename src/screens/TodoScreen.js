import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, removeTodo }) => {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <EditModal visible={modal} onCancel={() => setModal(false)} />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button onPress={() => setModal(true)} title="Ред." />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color={THEME.GREY_COLOR} title="Назад" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            color={THEME.DANGER_COLOR}
            title="Удалить"
            onPress={() => removeTodo(todo.id)}
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
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
