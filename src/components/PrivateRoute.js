import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import { AppRoute } from "../const";


const PrivateRoute = (props) => {
  const {render, path, role} = props;

  if (!role) {
    return <Redirect to={AppRoute.LOGIN}/>;
  }

  return (
    <Route
      path={path}
      render={({match}) => (
        match.params.role === role
          ? render(match)
          : <Redirect to={`/${role}`} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  role: PropTypes.string,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;