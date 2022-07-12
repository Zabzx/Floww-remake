import React from 'react'
import './Sidebar.css';
import {FiHome} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h1>Dashboard</h1>

        <ul className="sidebar-options">
          <div className="sidebar-option">
            <FiHome className="sidebar-option-icon home-i" />
            <li>Home</li>
          </div>

          <div className="sidebar-option">
            <div className="notif">
            <FiBell className="sidebar-option-icon" />
            </div>
            <li>Notifications</li>
          </div>

          <div className="sidebar-option">
            <div className="message">
            <FiMail className="sidebar-option-icon message" />
            </div>
            <li>Messages</li>
          </div>
        </ul>

        <Link to='/profile'>
        <div className="profile-link">
          <IoPersonCircle />
          <h1>Profile</h1>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar