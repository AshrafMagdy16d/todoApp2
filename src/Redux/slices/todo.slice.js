
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        filteredTodos: [],
    },
    reducers: {
        addNewTodo: (state, action) => {
            state.todos =[...state.todos, action.payload];
            
        },
        toggleStatus: (state, action) => {
            const {todos} = state;
            const { id } = action.payload;
            const selectedTodoIndex = todos.findIndex((todo) => todo.id === id);
            const updatedTodos = {
                ...todos[selectedTodoIndex],
                isDone: !todos[selectedTodoIndex].isDone,
            };
            const allTodos = [...todos];
            allTodos[selectedTodoIndex] = updatedTodos;
            state.todos = allTodos;
        },
    },
});
export const { addNewTodo , toggleStatus } = todoSlice.actions;

export default todoSlice;