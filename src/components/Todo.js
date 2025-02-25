import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { toggleStatus } from '../Redux/slices/todo.slice';


const Todo =(todo)=>{
    const {navigate}=useNavigation();
    const dispatch = UseDispatch();
    return (
                   <FlatList
                              data={filteredTodos}
                              keyExtractor={(todo) => todo.id.toString()}
                              renderItem={({ todo }) => (
                                  <Pressable style={styles.todosContainer} onPress={() => navigate('TodoDetails', todo)}>
                                      <Text style={{ fontSize: 15, textDecorationLine: todo.isDone ? 'line-through' : 'none' }}>
                                          {todo.title}
                                      </Text>
      
                                      <View style={{ flexDirection: 'row', gap: 10 }}>
                                          {item.isDone ? (
                                              <MaterialCommunityIcons name="progress-clock" size={20} color="green" onPress={() => dispatch(toggleStatuss(todo.id))} />
                                          ) : (
                                              <AntDesign name="checkcircleo" size={20} color="green" onPress={() => dispatch(toggleStatus(todo.id))} />
                                          )}
                                          <Feather name="trash" size={20} color="red" onPress={() => setTodos(todos.filter(todo => todo.id !== todo.id))} />
                                      </View>
                                  </Pressable>
                              )}
                          />
    );
}
export default Todo;

const styles = {
    todosContainer: { marginTop: 10, width: "90%", padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 10, borderWidth: 1, borderColor: "black" },
};
