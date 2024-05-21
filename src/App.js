import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { isAuthenticated } from "./services/authService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
