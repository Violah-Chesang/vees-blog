import React, { useContext, useState } from "react";
import "./login.css";
import logo from '../../../images/logo.png';
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("pass123");
  const {user, isFetching, error, logout, dispatch } = useContext(AuthContext);

  const handleLogin =async  (event) => {
    event.preventDefault();
      // LOGIN_START
      dispatch({type: 'LOGIN_START'});
      try {
        // LOGIN_SUCCESS
        const res = await axios.post("https://vees-blog-backend.vercel.app/", {userName, password});
        const userData = res.data;
        dispatch({type: 'LOGIN_SUCCESS',payload: userData});
        console.log('User data:', userData);
              
        const token = userData.token;
        console.log(token)
        if (!token) {
          console.log("No token issued");
          return;
        }
        console.log('User data:', userData);
        sessionStorage.setItem("token", token);
          navigate(`/home`);
      } catch (error) {
        // LOGIN_FAILURE
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response ? error.response.data : "Login failed" });
        console.log('Login error:', error.response ? error.response.data : error);
        
      }     

  };

  const resetPass = () => {

  }

  return (
    <div className="login">
      <div className="login-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="side-header">
          <p><i>Pick up your spatula and let's get cooking...</i></p>
        </div>
      </div>
      <div className="login-container">
        <h1>Welcome</h1>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              required
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="login-btn" type="submit">{isFetching? 'loading...' : 'Login'}</button>
            {error && <span>{error}</span>}
          </form>

          <div className="login-bottom-nav">
            <p>
              Forgot Password?<br /> <Link to={resetPass}>Click here</Link>               
            </p>
            <p>
              Don't have an account?<br /> <Link to='/signup'>Register</Link>               
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
