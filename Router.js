import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompeletedTodos from './CompeletedTodo';
import StackNavigtor from './StackNavigtor';


const Tabs = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
   


      <Tabs.Navigator >
        <Tabs.Screen name="Main" component={StackNavigtor} screenOptions={{ headerShown: false }}/>
        <Tabs.Screen name="CompletedTodos" component={CompeletedTodos} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Router;
