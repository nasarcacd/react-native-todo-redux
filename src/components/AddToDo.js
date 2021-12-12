import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {addItem} from '../actions/todo/TodoActions';

const AddTodo = ({todoStore}) => {
  const dispatch = useDispatch();
  const [text, onChangeText] = useState("");

  const addTask = () => {
    if(text.trim() !== ""){
      dispatch(addItem(text)); 
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextInput
          placeholder='type a task'
          onChangeText={onChangeText}
          value={text}
          multiline={true}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <Button
          style={styles.btn}
          onPress={addTask}
          title="Add"
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    todoStore: state.todoStore,
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 1,
    flexDirection: 'row',
    backgroundColor: '#90caf9',
  },
  titleContainer: {
    flex: 0.7,
  },
  addButtonContainer: {
    flex: 0.3,
  },
});

export default connect(mapStateToProps)(AddTodo);
