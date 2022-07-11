import React, {useContext} from 'react'
import { ResponsiveContext } from '../../../context/ResponsioveContext'
import './Home.css'
import Sidebar from '../../Sidebar/Sidebar'
import Stories from '../../Stories/Stories'
import Posts from '../../Posts/Posts'
import Nav from '../../Navigation/Nav'
import Profile from '../Profile/Profile'

const Home = () => {

  const [responsiveContext, setResponsiveConext] = useContext(ResponsiveContext)
  return (
    <>
    <Nav useLinks={true}/>
    <div className="home">
      <Sidebar />
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