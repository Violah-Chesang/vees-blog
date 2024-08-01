import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/home/Home';

function Main() {
  return (
    <div className='main'>
        <Routes>
            <Route path='/dashboard/:userName' element={< Dashboard/> } />
            <Route path='/' element={< Login/> } />
            <Route path='/signup' element={< Signup/> } />
            <Route path='/home' element={< Home/>} />
        </Routes>
    </div>
  )
}

export default Main;