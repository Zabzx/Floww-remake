import React, {useContext} from 'react'
import { ResponsiveContext } from '../../../context/ResponsioveContext'
import './Home.css'
import {FiHome} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
import Stories from '../../Stories/Stories'
import Posts from '../../Posts/Posts'
import Nav from '../../Navigation/Nav'

const Home = () => {

  const [responsiveContext, setResponsiveConext] = useContext(ResponsiveContext)
  return (
    <>
    <Nav/>
    <div className="home">
      
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
        <div className=  {responsiveContext.trending ? "trending-active trending" : 'trending'}>
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