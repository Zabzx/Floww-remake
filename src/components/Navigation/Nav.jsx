import './Nav.css'
import React, {useContext, useState} from 'react'
import { ResponsiveContext } from '../../context/ResponsioveContext'
import { Link } from 'react-router-dom';
import {SiDialogflow} from 'react-icons/si';

const Nav = ({useLinks}) => {

  const [responsiveContext, setResponsiveContext] = useContext(ResponsiveContext)

  const openTrending = () => {
    setResponsiveContext({...responsiveContext, trending: !responsiveContext.trending})
  }

  return (
    <div className="header-container">
    <header className="header profile-container">
      <div className="nav-logo">
        <SiDialogflow className="nav-logo" />
      </div>

      <ul className="nav-links">
        <Link to={'/home'} style={{textDecoration: 'none', color: 'white'}}><li className="nav-link">Home</li></Link>
        <Link to={'/profile'} style={{textDecoration: 'none', color: 'white'}}><li className="nav-link">Profile</li></Link>
      </ul>

      {useLinks ? <div className="nav-menu" onClick={openTrending}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> : ''}
      </header>
    </div>
  )
}

export default Nav