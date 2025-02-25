import { useState } from 'react';

import Router from './src/Routing';
import { Provider } from 'react-redux';
import store from './src/Redux/store';






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
 
<Provider store={store}>
  <Router/>
</Provider>

  );
}

