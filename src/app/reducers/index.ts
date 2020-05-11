import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { default as login } from "./LoginReducer";
import { RootState } from './state';
import { todoReducer } from './todos';
import { default as add} from "./employeeReducer";

export { RootState };
export const rootReducer = combineReducers({
  form: formReducer,
  login,
  todos: todoReducer,
  add
});
  
export default rootReducer;