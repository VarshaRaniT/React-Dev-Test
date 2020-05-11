import { handleActions, Action } from "redux-actions";
import {ADD,GET_USERS,TOGGLE_COLOR,GET_DEPARTMENT} from "../constant";
import {EmployeeListState, EmployeeListProps, EmployeeListInitialState} from "../models/addmodel"

export default handleActions<EmployeeListState, EmployeeListProps>(
    {
      [ADD]: (
        state: EmployeeListState,
        actions: Action<EmployeeListState>
      ): EmployeeListState => {
        return {
          ...state,
          toggleStatus: !state.toggleStatus,
        };
      },
      // get datalist 
      [GET_USERS]: (
        state: EmployeeListState,
        actions: Action<EmployeeListState>
      ): EmployeeListState => {
        return {
          ...state,
          datalist: actions.payload!.datalist,
        };
      },
      // get department list
      [GET_DEPARTMENT]: (
        state: EmployeeListState,
        actions: Action<EmployeeListState>
      ): EmployeeListState => {
        return {
          ...state,
          departmentlist: actions.payload!.departmentlist,
        };
      },
      // change color code
      [TOGGLE_COLOR]: (
        state: EmployeeListState,
        actions: Action<EmployeeListState>
      ): EmployeeListState => {
        return {
          ...state,
          colorcode: actions.payload!.colorcode,
        };
      },
    },
    EmployeeListInitialState
  );