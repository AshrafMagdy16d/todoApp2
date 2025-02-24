
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, TextInput, Pressable ,Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Home() {
    const {navigate} = useNavigation();
    const [todos, setTodos] = useState([
        {
          id: "1",
          title: "Learn React Native",
        },
        {
          id: "2",
          title: "Learn React",
        },
        {
          id: "3",
          title: "Learn Expo",
        },
      ]);
   
  return (
    <SafeAreaView style={styles.container}>
    
      <TextInput style={styles.input} placeholder="Enter Title" />
      <TextInput style={styles.input} placeholder="Enter Description" />
      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
        <Text style={{ color: "#fff" }}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterBtn, styles.activeFilterBtn]} activeOpacity={0.8}>
          <Text style={[styles.filterText, styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
          <Text style={styles.filterText}>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>
      
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.todosContainer} onPress={()=>navigate('TodoDetails',item)}>
              <Text>{item.title}</Text>
              
              {Platform.OS === "ios" ? (
        <AntDesign name="checkcircleo" size={15} color="red" />
      ) : (
        <AntDesign name="checkcircle" size={15} color="red" />
      )}
              <Feather name="trash" size={15} color="red" />

            </Pressable>
          )}
        />
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 20,
    },
    appHeader: {
      fontSize: 30,
      color: "red",
      textTransform: "uppercase",
    },
    input: {
      borderWidth: 1,
      borderColor: "#aeaeae",
      width: "90%",
      marginVertical: 10,
      height: 50,
      padding: 10,
      borderRadius: 5,
    },
    submitBtn: {
      width: "50%",
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    dividerLine: {
      height: 1,
      width: "90%",
      backgroundColor: "#aeaeae",
      marginVertical: 15,
    },
    filterContainer: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
    },
    filterBtn: {
      width: "30%",
      backgroundColor: "#ffffff",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "black",
    },
    filterText: {
      color: "black",
      fontSize: 15,
    },
    activeFilterBtn: {
      width: "30%",
      backgroundColor: "black",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "black",
    },
    activeFilterText: {
      color: "white",
      fontSize: 15,
    },
    todosContainer: {
      marginTop: 10,
      width: 200,
      borderRadius: 15,
      borderWidth:1,
      borderColor: "black",
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",

    },
    doneTodo: {
      textDecorationLine: "line-through",
    },
  });
  