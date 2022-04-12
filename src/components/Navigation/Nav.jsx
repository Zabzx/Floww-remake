import './Nav.css'
import React, {useContext, useState} from 'react'
import { ResponsiveContext } from '../../context/ResponsioveContext'

const Nav = ({useLinks}) => {

  const [responsiveContext, setResponsiveContext] = useContext(ResponsiveContext)

  const openTrending = () => {
    setResponsiveContext({...responsiveContext, trending: !responsiveContext.trending})
  }

  return (
    <div className="header-container">
    <header className="header profile-container">
      <div className="nav-logo">
        <h1>Floww</h1>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Profile</li>
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