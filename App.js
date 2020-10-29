import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import { Provider, useDispatch, useSelector } from "react-redux";
import {store} from "./src/store/index";
import { getDataAsync, loadPosts } from "./src/store/actions/post";

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

const AppWrapper = () => {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "Выучить React Native" },
    { id: "2", title: "Написать приложение" },
  ]);

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post.posts);
  const data = useSelector((state) => state.post.data);

  useMemo(() => console.log(data), [data]);

  useEffect(() => {
    dispatch(loadPosts(["0"]));
    dispatch(getDataAsync());
  }, [loadPosts, getDataAsync]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        removeTodo={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
