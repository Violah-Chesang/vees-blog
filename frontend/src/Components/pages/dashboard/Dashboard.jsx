import React, { useContext } from 'react';
import './dashboard.css';
import logo from '../../../images/Vee-logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

function Dashboard() {
  const { dispatch } = useContext(AuthContext);
  const userName = useParams().userName;
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = sessionStorage.removeItem('token')
    dispatch({type: 'LOGOUT', payload: token});
    navigate('/')
  }

  return (
    <div className='dashboard'>
      <div className="dash-header">
        <div className="welcome-user">
          <h1>Welcome</h1>
          <h3>{userName}</h3>
        </div>
        <div className="dash-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dash-nav">
            <button className='dash-btn' type="button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
        <div className="dash-container">
          <h1>Recipe dashboard coming soon...</h1>
        </div>
    </div>
  )
}

export default Dashboard;