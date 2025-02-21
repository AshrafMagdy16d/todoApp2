import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './Home';
import TodoDetails from './TodoDetails';


export default function StackNavigtor() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Todo App' }}/>
        <Stack.Screen name="TodoDetails" component={TodoDetails} options={{ title: 'Todo Details' }}/>
      </Stack.Navigator>
  )
}
