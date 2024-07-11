import React from 'react'
import './signup.css';
import logo from '../../../images/Vee-logo.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();

    const data = {
      fullNames : e.target.fullNames.value,
      email : e.target.email.value,
      userName : e.target.userName.value,
      password : e.target.password.value
    }

    try {
      const res = await axios.post('http://localhost:5500/signup/', data);
      navigate('/');
      console.log(res.data)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='signup'>
      <div className="register-container">
        <div className="content">
          <div className="content-logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>Register</h1>
          <div className="form-signup">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullNames">Full Names: </label>
              <input type="text" name="fullNames" id="fullNames" placeholder='John Doe' />

              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" placeholder='johndoe@email.com' />

              <label htmlFor="userName">Username: </label>
              <input type="text" name="userName" id="userName" placeholder='jdoe' />

              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="password" />

              <button type="submit">Register</button>
            </form>
            <p>Already registered? <Link to='/'>Login</Link></p>            
          </div>
        </div>

        <div className="image"></div>
      </div>
    </div>
  )
}

export default Signup;