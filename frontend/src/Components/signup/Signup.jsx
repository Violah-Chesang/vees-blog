import React from 'react'
import './signup.css';
import logo from '../../images/Vee-logo.png';

function Signup() {
  return (
    <div className='signup'>
      <div className="register-container">
        <div className="content">
          <div className="content-logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>Register</h1>
          <div className="form-signup">
            <label htmlFor="fullnames">Full Names: </label>
            <input type="text" name="fullnames" id="fullnames" placeholder='John Doe' />

            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder='johndoe@email.com' />

            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" placeholder='jdoe' />

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />

            <button type="submit">Register</button>
            <p>Already registered? Login</p>            
          </div>
        </div>

        <div className="image"></div>
      </div>
    </div>
  )
}

export default Signup;