import { createAction } from "redux-actions";
import {ADD, GET_USERS,TOGGLE_COLOR,GET_DEPARTMENT} from "../constant/employeeConstant";

export const toggleStatusAction = createAction(ADD, (toggleStatus: any) => ({
    toggleStatus
  }));
  export const getEmployeeList = createAction(GET_USERS, (datalist: any) => ({
    datalist
  }));
  export const getDepartmentList = createAction(GET_DEPARTMENT, (departmentlist: any) => ({
    departmentlist
  }));
  export const onColorToggle = createAction(TOGGLE_COLOR, (colorcode: any) => ({
    colorcode
  }));