import React from 'react';
import Home from './core/Home';
import Menu from './core/Menu';
import { Route, Switch } from 'react-router-dom';
import Signup from '../src/user/Signup';
import Signin from '../src/user/Signin';
import Profile from './user/Profile';
import Users from './user/Users';
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute';
const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <PrivateRoute exact path='/user/edit/:userId' component={EditProfile} />
        <PrivateRoute exact path='/user/:userId' component={Profile} />
      </Switch>
    </div>
  );
};

export default MainRouter;
