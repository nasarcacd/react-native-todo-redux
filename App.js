import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Todo from './src/components/Todo';
import AddTodo from './src/components/AddToDo';
import configureStore from './src/Store';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <View>
        <Text>Todo App</Text>
        <AddTodo />
        <Todo />
      </View>
    </Provider>
  );
};

export default App;
