export interface EmployeeListState {
  toggleStatus:boolean,
  datalist:any,
  departmentlist:any
  colorcode:string,
  }
  export interface EmployeeListProps extends EmployeeListState {
    toggleStatusAction: (toggleStatus: boolean) => void;
    getEmployeeList: (datalist: any) => void;
    getDepartmentList: (departmentlist: any) => void;
    onColorToggle: (colorcode:string) => void;
  }
  export const EmployeeListInitialState: EmployeeListState = {
    toggleStatus:false,
    datalist:[],
    colorcode:"",
    departmentlist:[]
  };
  