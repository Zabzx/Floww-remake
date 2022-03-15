import React from 'react'
import { useState } from 'react'
import './Home.css'
import {FiHome} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
import DefaultPfp from '../../../assets/default-pfp.jpg'
import Stories from '../../Stories/Stories'
import Posts from '../../Posts/Posts'

const Home = () => {

  const [postInputValue, setPostInputValue] = useState('')

  const uploadPost = (e) => {
    e.preventDefault()
  }
  return (
    <>
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

        <form action="" className='form-active post-form'>
          <input type="text" name='post' className='post-input' placeholder="What's on your mind?" onChange={(e) => setPostInputValue(e.target.value)} />
          <button className='btn' onClick={(e) => uploadPost(e)}>Post</button>
        </form>

        <Posts/>
      </div>

      <div className="right">
        right
      </div>
    </div>
    </>
  )
}

export default Home