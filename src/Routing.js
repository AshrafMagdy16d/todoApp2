import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigtor from './../StackNavigtor';
import CompeletedTodos from '../CompeletedTodo';



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
