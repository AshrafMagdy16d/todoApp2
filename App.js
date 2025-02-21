import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Router from './Router';


export default function App() {
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

 <Router/>
  );
}

