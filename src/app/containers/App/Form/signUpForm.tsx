import * as React from 'react';
import axios from "axios";
// import { Redirect } from 'react-router';
import swal from 'sweetalert';
import "./../../../../assets/scss/style.scss"
export interface SignUpFormProps {
    name: any,
    password: any,
    confirmpassword: any,
    formerror: any,
    handleSuccessfulAuth: any
}

export interface SignUpFormState {

}

class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
    state = {
        name: "",
        password: "",
        confirmpassword: "",
        signedIn: false
    };
    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: any) => {
        const { name, password, confirmpassword } = this.state;
        const admins = {
            name: name,
            password: password,
            confirmpassword: confirmpassword
        }
        if (password == confirmpassword) {
            axios.post(
                "http://localhost:3000/admins", (admins),

                { withCredentials: true }
            )
                .then(response => {
                    if (response.data.logged_in) {
                        if (response.data.length != 0) {
                            this.setState({
                                signedIn: true
                            });
                        }
                    }
                })
                .catch(error => {
                    console.log("login error", error);
                });
        }
        else {
            swal({
                title: "Password Confirm password not same",
                icon: "warning",
                dangerMode: true,
                className: "error__btn"
            })
        }

        event.preventDefault();
    }
    // ChecSignedIn = () => {
    //     console.log(this.state.signedIn, "hffhgjhfjhgj")
    //     if (this.state.signedIn == true) {
    //       return (<Redirect to="/employee" />);
    //     }
    //     else "hello"
    //   }
    render() {
        return (
            <React.Fragment>
                {/* {this.ChecSignedIn} */}
                <div className="custom__form">
                    <div className="inner__form">
                        {/* <div className="svg__animation">
                        <i className="fas fa-user-plus"></i>
                        </div> */}
                        <h1>Admin Sign Up</h1>
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
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="Confirm Password"
                                value={this.state.confirmpassword}
                                onChange={this.handleChange}
                                required
                            />

                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default SignUpForm;