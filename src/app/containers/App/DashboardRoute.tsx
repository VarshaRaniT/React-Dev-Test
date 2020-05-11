import * as React from "react";
import Dashboard from "./Main";
import { PrivateRoute } from "./../../routes/router";
import LoginForm  from "./Form/LoginForm";
import SignUpForm  from "./Form/signUpForm";
import ColorToggle  from "../../components/colorToggleComponent/colorToggleParent";
import EmployeeList from "./../../components/employeeList"
import CreateEmployee from "./../../components/createEmployee"
class DashboardRouter extends React.Component {
  render() {
    return (
      <div>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/login" component={LoginForm} />
        <PrivateRoute exact path="/sign-up" component={SignUpForm} />
        <PrivateRoute exact path="/color-toggle" component={ColorToggle} />
        <PrivateRoute exact path="/employee" component={EmployeeList} />
        <PrivateRoute exact path="/create-employee" component={CreateEmployee} />
      </div>
    );
  }
}

export default DashboardRouter;
