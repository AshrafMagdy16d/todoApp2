
import { configureStore } from '@redux.js/toolKit';
import todoSlice from './slices/todo.slice';
const store = configureStore({
   
    reducer:{  
        todo: todoSlice.reducer
        
     }
});
export default store;