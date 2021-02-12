import React from 'react';
import Users from "./view/users";
import Login from "./view/login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Users />
        </Route>
      </Router>
      <ToastContainer />
    </>
  );
}
export default App;
