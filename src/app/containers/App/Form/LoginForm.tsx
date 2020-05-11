import * as React from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { Redirect } from 'react-router';
import "./../../../../assets/scss/style.scss"
import Link from '@material-ui/core/Link';

export interface LoginFormProps {
  name: any,
  password: any,
  logedIn: boolean
}

export interface LoginFormState {

}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  state = {
    name: "",
    password: "",
    logedIn: ""
  };
  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.password]: event.target.value
    });
  }

  handleSubmit = (event: any) => {
    const { name, password } = this.state;
    axios
      .get(
        "http://localhost:3000/admins?name=" + name + "", {withCredentials:true}
      )
      .then(response => {
        console.log(response)
        if (response.data.length != 0 && response.data[0].password === password) {
          this.setState({
            logedIn: "loggedIn"
          });
          swal({
            title: "Successfully Logged In",
            icon: "success",
            className: "sucess__btn"
          });
        }
        else if (response.data.length === 0) {
          swal({
            title: "Admin does not exist",
            icon: "warning",
            dangerMode: true,
            className: "error__btn"
          })
        }
        else
          swal({
            title: "Username Password does not match",
            icon: "warning",
            dangerMode: true,
            className: "error__btn"
          })
      })
      .catch(error => {
        return console.log(error)
      });
    event.preventDefault();
  }
  ChecLoggedIn = () => {
    console.log(this.state.logedIn, "hffhgjhfjhgj")
    if (this.state.logedIn === "loggedIn") {
      return (<Redirect to="/employee" />);
    } else {
      return (<Redirect to="/login" />);
    }
  }
  render() {

    return (
      <div className="custom__form">
        {this.ChecLoggedIn()}
        <div className="inner__form">
          <Link href="/sign-up" className="btn__link">
            <span className="btn__link">Sign Up</span></Link>
          {/* <div className="svg__animation">
          <i className="fas fa-user"></i>
          </div> */}
          <h1>Admin Login</h1>
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
            <button type="submit" className="mr-2">Login</button>

          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;