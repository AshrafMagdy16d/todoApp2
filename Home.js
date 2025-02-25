import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, TextInput, Pressable } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Todos from './src/components/Todos';
import TodosForm from './src/components/TodosForm';



export default function Home() {


    return (
        <SafeAreaView style={styles.container}>


<TodosForm/>

         <Todos />
        </SafeAreaView>
    );
}

