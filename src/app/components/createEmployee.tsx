import * as React from 'react';
import axios from "axios";
import "./../../assets/scss/style.scss"
import swal from 'sweetalert';
import HeaderComponent from "./commonComponents/header"
export interface CreateEmployeeProps {
    name: any,
    password: any,
    department_id: any,
    address: any,
    employeeCreated: boolean,

}

export interface CreateEmployeeState {

}

class CreateEmployee extends React.Component<CreateEmployeeProps, CreateEmployeeState> {
    state = {
        name: "",
        password: "",
        department_id: "",
        address: "",
        employeeCreated: false

    };
    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: any) => {
        const { name, password, department_id, address } = this.state;
        const employees = {
            name: name,
            password: password,
            department_id: department_id,
            address: address
        }
        axios
            .post(
                "http://localhost:3000/employees", (employees),

                { withCredentials: true }
            )
            .then(response => {
                if(response.data.length !==0){
                    swal({
                        title: "Employee Successfully Created",
                        icon: "success",
                        className:"sucess__btn"
                      });
                }
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }
    render() {
        let hidebtn_emp =true
        return (
            <React.Fragment>
                <HeaderComponent hidebtn={hidebtn_emp}/>
                <div className="custom__form">
                    <div className="inner__form">
                        <h1>Create Employee</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="name"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="department_id"
                                placeholder="Department Id"
                                value={this.state.department_id}
                                onChange={this.handleChange}
                                required
                            />   <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={this.state.address}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />

                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateEmployee;