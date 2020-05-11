import React from 'react';
import { connect } from "react-redux";
import { RootState } from '../reducers';
import { EmployeeListProps, EmployeeListState } from '../models/addmodel';
import { toggleStatusAction, getEmployeeList, getDepartmentList } from '../actions/employeeAction';
import { fetchDataList, fetchDepartmentList } from '../data/api/index';
import './../../assets/scss/style.scss';
// import material table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HeaderComponent from "./commonComponents/header"



class EmployeeList extends React.Component<EmployeeListProps, EmployeeListState> {
    componentDidMount() {
        const { getEmployeeList, getDepartmentList } = this.props
        fetchDataList(getEmployeeList)
        fetchDepartmentList(getDepartmentList)
    }
    // state = { :  }
    incecrementFunction = (toggleStatus: boolean) => {
        const { toggleStatusAction } = this.props;
        toggleStatusAction(toggleStatus)
    }
    render() {
        const { toggleStatus, datalist, departmentlist } = this.props;
        console.log(departmentlist, toggleStatus)
        return (
            <React.Fragment>
                <HeaderComponent/>
                <div className="custom__table__main__wrap">
                    <TableContainer className="table__custom" component={Paper}>
                        <Table stickyHeader aria-label="sticky table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    <TableCell align="left">Department Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {datalist.map((value: any) => (
                                    <TableRow key={value.id}>
                                        <TableCell scope="row">
                                            {value.name}
                                        </TableCell>
                                        <TableCell align="left">{value.address}</TableCell>
                                        <TableCell align="left">{departmentlist.map((value1: any) => (
                                            <div key={value1.id}>{value1.id == value.department_id ? value1.name : ""}</div>
                                        ))}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </React.Fragment>
        );
    }
}
const mapStateToProps = (state: RootState) => ({
    toggleStatus: state.add.toggleStatus,
    datalist: state.add.datalist,
    departmentlist: state.add.departmentlist
});
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    toggleStatusAction: (toggleStatus: boolean) => {
        dispatch(toggleStatusAction(toggleStatus));
    },
    getEmployeeList: (datalist: any) => {
        dispatch(getEmployeeList(datalist));
    },
    getDepartmentList: (departmentlist: any) => {
        dispatch(getDepartmentList(departmentlist));
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);