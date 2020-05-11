import React from 'react';
// import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
// import Routes from "./routes/router";
// import Dashboard from './containers/App/DashboardRoute'
import ColorToggle from "./components/colorToggleComponent/colorToggleParent";
import LoginForm from "./containers/App/Form/LoginForm";
import SignUpForm from "./containers/App/Form/signUpForm";
import EmployeeList from "./components/employeeList";
import CreateEmployee from "./components/createEmployee";

export const App = hot(module)(() => (
  <Router>
    <main className="container-fluid ml-0 px-0">
      {/* <Routes /> */}
      <Switch>
      <Route exact
          path="/"
          component={LoginForm}
        />
      <Route exact
          path="/login"
          component={LoginForm}
        />
        <Route exact
          path="/color-toggle"
          component={ColorToggle}
        />
         <Route exact
          path="/sign-up"
          component={SignUpForm}
        />
            <Route exact
          path="/employee"
          component={EmployeeList}
        />
         <Route exact
          path="/create-employee"
          component={CreateEmployee}
        />
      </Switch>
    </main>
  </Router>
));
