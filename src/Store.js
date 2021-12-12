import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import TodoReducer from './reducers/TodoReducer';

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = compose(applyMiddleware(...middlewares));
  const reducers = combineReducers({
    todoStore:  TodoReducer,
  });
  const store = createStore(reducers, enhancers);
  return store;
};
export default configureStore;
