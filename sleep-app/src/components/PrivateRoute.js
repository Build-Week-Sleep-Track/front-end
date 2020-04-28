import React from "react";
import { Route, useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory()
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {

          return <Component {...props} />;
        } else {
            history.push('/login')
        //   return <Redirect to="/login" />;

        }
      }}
    />
  );
};

export default PrivateRoute;