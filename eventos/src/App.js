import Users from "./view/users";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Users/>
        <ToastContainer />
    </>
  );
}
export default App;
