import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  PageNotFound,

  Profile,

} from './Components';
import Home from './Components/Home/index';
import PrivateRoute from './auth/PrivateRoute';

function PrivatePages(props) {
  const { turnAuthHeader } = props;

  return (
    <>
      <Switch>

        <PrivateRoute
          exact
          path="/app/home"
          turnAuthHeader={turnAuthHeader}
          component={Home}
        />

        <PrivateRoute exact path="/app/profile/:username" component={Profile} />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </>
  );
}

export default PrivatePages;
