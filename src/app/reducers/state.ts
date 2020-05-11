import { TodoModel } from 'app/models';
import { EmployeeListState} from 'app/models/addmodel';
// import {LoginState} from 'app/models/LoginModel'

export interface RootState {
  todos: RootState.TodoState;
  // router?: any;
  add:EmployeeListState;
  // login:LoginState
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
