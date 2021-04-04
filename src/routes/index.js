import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Login from '../pages/Login'
import Signup from '../pages/Signup';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home"  component={Home} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  );
}