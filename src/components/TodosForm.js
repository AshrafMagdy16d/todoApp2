import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native'
import { Text, TextInput, View } from 'react-native-web'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, TextInput, Pressable } from 'react-native';

export default function TodosForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState([]);
  

    const dispatch = UseDispatch();

    const saveTodosToStorage = async (todos) => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error("Error saving todos:", error);
        }
    };
    
    const addNewTodo = () => {
        if (!title.trim()) return;
        const obj = {
            id: Date.now(),
            title,
            description,
            isDone: false,
        };
        dispatch(addTodo(obj));
        setTodos(allTodos);
        // setFilteredTodos(allTodos);
        saveTodosToStorage(allTodos); 
        setTitle('');
        setDescription('');
    };
    const loadTodosFromStorage = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) {
                const parsedTodos = JSON.parse(storedTodos);
                setTodos(parsedTodos);
                setFilteredTodos(parsedTodos);
            }
        } catch (error) {
            console.error("Error loading todos:", error);
        }
    };
    
    useEffect(() => {
        loadTodosFromStorage();
    }, []);
        





    useEffect(() => {
        filterTodos();
        saveTodosToStorage(todos);
    }, [filtrationType, todos]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.appHeader}>Todo App</Text>

    <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
    />
    <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
    />
    <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={addNewTodo}>
        <Text style={{ color: "#fff" }}>Submit</Text>
    </TouchableOpacity>
</View>
  )
}
