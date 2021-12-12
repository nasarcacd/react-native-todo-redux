import React from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {removeItem} from '../actions/todo/TodoActions';

const Todo = ({todoStore}) => {
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <View key={item.id} style={styles.item}>
      <View style={styles.titleContainer}>
        <Text>{item.title}</Text>
      </View>
      <View style={styles.removeContainer}>
        <Button
          style={styles.btn}
          onPress={() => dispatch(removeItem(item.id))}
          title="Remove"
        />
      </View>
    </View>
  );
  return (
    <FlatList
      data={todoStore.todoList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const mapStateToProps = state => {
  return {
    todoStore: state.todoStore,
  };
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    margin: 1,
    flexDirection: 'row',
    backgroundColor: '#e3f2fd',
  },
  btn: {
    fontSize: '4rem',
  },
  titleContainer: {
    flex: 0.7,
  },
  removeContainer: {
    flex: 0.3,
  },
});

export default connect(mapStateToProps)(Todo);
