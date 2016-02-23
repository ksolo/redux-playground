import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import button from './button-reducer';


const rootReducer = combineReducers({
  routing: routeReducer,
  button,
});


export default rootReducer;
