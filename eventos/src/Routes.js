import React from 'react';
import Users from "./view/users";
import Login from "./view/login";
import Home from "./view/home";
import Navbar from '../src/components/navbar'
import store from '../src/store'
import Recover from './view/recover';
import EventRegister from './view/event-register';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Users />
        </Route>
        <Redirect exact path='/' to='/login' />
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/recover'>
          <Recover />
        </Route>
        <Route exact path='/events/register'>
          <EventRegister />
        </Route>
      </Router>
    </Provider>

  );
}
export default Routes;
