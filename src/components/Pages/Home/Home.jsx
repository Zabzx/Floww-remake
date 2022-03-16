import React from 'react'
import { useState } from 'react'
import './Home.css'
import { PostProvider } from '../../../context/PostContext'
import {FiHome} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
import DefaultPfp from '../../../assets/default-pfp.jpg'
import Stories from '../../Stories/Stories'
import Posts from '../../Posts/Posts'
import Nav from '../../Navigation/Nav'

const Home = () => {
  return (
    <>
    <Nav/>
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
        <Stories/>
        <Posts/>
      </div>

      <div className="right">
        <div className="trending">
          <h1>Trending Topics</h1>
          <ul>
            <li>#Movies</li>
            <li>#Video Games</li>
            <li>#Anime</li>
            <li>#Food</li>
            <li>#Technology</li>
            <li>#Fitness</li>
            <li>#Music</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home