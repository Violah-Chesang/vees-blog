import React from 'react';
import './login.css';
import logo from '../../images/logo.png';

function Login() {
  return (
    <div className='login'>
        <div className="login-header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="side-header">
                <p>Photo</p>
                <p>Settings</p>
                <p>Logout</p>
            </div>
        </div>
        <div className="login-container">
            <h1>Welcome</h1>
            <div className="login-form">
                <input type="text" name="username" id="username" placeholder='Username'/>
                <input type="password" name="password" id="password" placeholder='Password' />
                <input className='login-btn' type="submit" value="LOGIN" />
                <div className="login-bottom-nav">
                    <p>Forgot Password?<br /> Click here</p>
                    <p>Don't have an account?<br /> Register</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login;