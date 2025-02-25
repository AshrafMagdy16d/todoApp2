import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {
    const todos = useSelector((state) => state.todos); 
      const [filteredTodos, setFilteredTodos] = useState([]);
        const [filtrationType, setFiltrationType] = useState("all");

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.dividerLine} />
            <View style={styles.filterContainer}>
                {["all", "inProgress", "done"].map(type => (
                    <TouchableOpacity
                        key={type}
                        style={{
                            ...styles.filterBtn,
                            ...(filtrationType === type ? styles.activeFilterBtn : {}),
                        }}
                        activeOpacity={0.8}
                        onPress={() => setFiltrationType(type)}
                    >
                        <Text style={filtrationType === type ? styles.activeFilterText : styles.filterText}>
                            {type === "all" ? "All" : type === "inProgress" ? "In Progress" : "Done"}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </View>
    );
};

export default Todos;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
    },
    filterBtn: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
    },
    activeFilterBtn: {
        backgroundColor: 'blue',
    },
    filterText: {
        color: 'black',
    },
    activeFilterText: {
        color: 'white',
    },
    dividerLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginVertical: 10,
    },
});
