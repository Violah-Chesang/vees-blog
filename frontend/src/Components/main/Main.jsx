import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup';
import Dashboard from '../pages/dashboard/Dashboard';

function Main() {
  return (
    <div className='main'>
        <Routes>
            <Route path='/dashboard/:userName' element={< Dashboard/> } />
            <Route path='/' element={< Login/> } />
            <Route path='/signup' element={< Signup/> } />
        </Routes>
    </div>
  )
}

export default Main;