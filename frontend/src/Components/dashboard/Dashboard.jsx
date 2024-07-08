import React from 'react';
import './dashboard.css';
import logo from '../../images/Vee-logo.png';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="dash-header">
        <div className="welcome-user">
          <h1>Welcome</h1>
          <h3>@username</h3>
        </div>
        <div className="dash-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dash-nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
        <div className="dash-container">
          <h1>Recipe dashboard coming soon...</h1>
        </div>
    </div>
  )
}

export default Dashboard;