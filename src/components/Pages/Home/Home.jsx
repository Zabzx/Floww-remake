import React from 'react'
import './Home.css'
import DefaultPfp from '../../../assets/default-pfp.jpg'

const Home = () => {
  return (
    <div className="home">

      <div className="dashboard">
        <h1>Dashboard</h1>
        <ul className="dashboard-options">
          <li className='dashboard-active'>Home</li>
          <li>Notifications</li>
          <li>Messages</li>
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
  )
}

export default Home