import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const AddTodo = ({ title }) => {
  return (
    <View style={styles.block}>
        <TextInput style={styles.input}></TextInput>
        <Button  title='Добавить'/>
    </View>
  );
};

const styles = StyleSheet.create({
  block:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  input:{
      width:'70%',
      borderStyle:'solid',
      borderBottomWidth:2,
      borderBottomColor:'#3949ab'
  }
});
