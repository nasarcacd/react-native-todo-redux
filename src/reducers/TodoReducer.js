import {
  ADD_ITEM_TODO_LIST,
  REMOVE_ITEM_TODO_LIST,
} from '../actions/todo/TodoActionsTypes';

const INITIAL_STATE = {
  todoList: [],
};

const TodoReducer = (state = INITIAL_STATE, action) => {
  const {todoList} = state;
  let newState;
  switch (action.type) {
    case ADD_ITEM_TODO_LIST:
      let title = action.payload;
      newState = {
        todoList: [...todoList, {id: todoList.length, title}],
      };
      return newState;
    case REMOVE_ITEM_TODO_LIST:
      let id = action.payload;
      newState = {
        todoList: todoList.filter(item => item.id !== id),
      };
      return newState;
    default:
      return state;
  }
};

export default TodoReducer;
