import {REMOVE_ITEM_TODO_LIST, ADD_ITEM_TODO_LIST} from './TodoActionsTypes';

export const addItem = title => ({
  type: ADD_ITEM_TODO_LIST,
  payload: title,
});

export const removeItem = id => ({
  type: REMOVE_ITEM_TODO_LIST,
  payload: id,
});