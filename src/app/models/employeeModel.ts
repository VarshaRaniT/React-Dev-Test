export interface EmployeeState {
    open: boolean
}
export interface EmployeeProps extends EmployeeState {
    toggleStatusAction: (toggleStatus: boolean) => void;
}
export const EmployeeInitialState: EmployeeState = {
    open: false
};
