import './Nav.css'
import React, {useContext} from 'react'
import { ResponsiveContext } from '../../context/ResponsioveContext'

const Nav = () => {

  const [responsiveContext, setResponsiveContext] = useContext(ResponsiveContext)

  const openTrending = () => {
    setResponsiveContext({...responsiveContext, trending: !responsiveContext.trending})
  }

  return (
    <div className="header-container">
    <div className="header profile-container">
      <div className="nav-logo">
        <h1>Floww</h1>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Profile</li>
      </ul>

      <div className="nav-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
    </div>
  )
}

export default Nav