import React from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';
import './index.scss';
import Home from './Home/index.smart.jsx';
import About from './About/index.smart.jsx';

const APP = () => (
  <div className="app">
    <nav>
      <NavLink to="/home" activeClassName="active">Home Page</NavLink>
      <NavLink to="/about" activeClassName="active">About Page</NavLink>
    </nav>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Redirect to="/about" />
    </Switch>
  </div>
);

export default APP;
