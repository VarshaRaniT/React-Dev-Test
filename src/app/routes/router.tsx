/**
 * Main Routes File
 */
import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import  DashboardComponent  from "./../containers/App/Main";
import pageRoutes from "./../routes/page_routes";
// import { getStateUserObject } from "../data/helper";
// export const getStateUserObject = () => {
//   return loggedIn
// };
//No Match Found
export const NoMatch = ({ location }: any) => {
  return (
    <React.Fragment>
      {location.pathname != "/login" && location.pathname != "login"
        ? (window.location.href = "/login")
        : ""}
    </React.Fragment>
  );
};

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const user = false;

  return (
    <Route
      {...rest}
      render={props =>
        user == false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export interface RoutesModuleState {}
export interface RoutesModuleProps extends RoutesModuleState {}

class RoutesModule extends React.Component<
  RoutesModuleProps,
  RoutesModuleState
> {
  render() {
    return (
      <Switch>
        {pageRoutes.map(route => (
          <Route
            key={route.key}
            path={route.name}
            component={route.component}
          />
        ))}
        <PrivateRoute path="/" component={DashboardComponent} />

        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default RoutesModule;
