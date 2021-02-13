import React from 'react';
import Users from "./view/users";
import Login from "./view/login";
import Home from "./view/home";
import Navbar from '../src/components/navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Routes() {
  return (

      <Router>
          <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Users />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Router>
      
    
  );
}
export default Routes;
