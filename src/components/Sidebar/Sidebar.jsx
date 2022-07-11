import React from 'react'
import './Sidebar.css';
import {FiHome} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="dashboard">
        <h1>Dashboard</h1>
        <ul className="dashboard-options">
          <div>
          <FiHome className='dashboard-icon'/>
          <li className='dashboard-active'>Home</li>
          </div>

          <div className='notif'>
          <FiBell className='dashboard-icon'/>
          <li className='dashboard-active'>Notifications</li>
          </div>

          <div className='msg'>
          <FiMail className='dashboard-icon'/>
          <li className='dashboard-active'>Messages</li>
          </div>
        </ul>

        <Link to={'/profile'} style={{textDecoration: 'none'}}>
        <div className="profile-link">
          <div className="circle"></div>
          <h2>Profile</h2>
        </div>
        </Link>
      </div>
  )
}

export default Sidebar