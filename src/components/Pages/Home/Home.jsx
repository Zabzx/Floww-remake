import React from 'react'
import './Home.css'
import {FiHome} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
import DefaultPfp from '../../../assets/default-pfp.jpg'
import Stories from '../../Stories/Stories'

const Home = () => {
  return (
    <>
    <Stories/>
    <div className="home">

      <div className="dashboard">
        <h1>Dashboard</h1>
        <ul className="dashboard-options">
          <li className='dashboard-active'><FiHome className='dashboard-icon'/>Home</li>
          <li className='notif'> <FiBell className='dashboard-icon'/> Notifications</li>
          <li className='msg'><FiMail className='dashboard-icon'/> Messages</li>
        </ul>
        <div className="profile-link">
          <div className="circle"></div>
          <h2>Profile</h2>
        </div>
      </div>

      <div className="main">
        main
      </div>

      <div className="right">
        right
      </div>
    </div>
    </>
  )
}

export default Home