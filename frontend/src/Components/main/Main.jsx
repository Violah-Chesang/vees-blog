import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Dashboard from '../dashboard/Dashboard';

function Main() {
  return (
    <div className='main'>
        <Routes>
            <Route path='/dashboard' element={< Dashboard/> } />
            <Route path='/' element={< Login/> } />
            <Route path='/signup' element={< Signup/> } />
        </Routes>
    </div>
  )
}

export default Main;