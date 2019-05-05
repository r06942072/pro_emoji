import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers' ;
import thunk from 'redux-thunk';

const initState = {};

const middleWare = [thunk]; 
//createStore(reducer, [preloadedState], [enhancer])
const store = createStore(
	rootReducer,
	initialState,
	compose(
	  applyMiddleware(...middleware),
	  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
  );

export default store;