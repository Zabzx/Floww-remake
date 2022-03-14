import React from 'react'
import './Stories.css'
import FoodStory from '../../assets/foodstory.jpg'
import CarStory from '../../assets/carstory.jpg'
import GirlStory from '../../assets/girlstory.jpg'
import SnowStory from '../../assets/snowstory.jpg'
import BoardStory from '../../assets/boardstory.jpg'

const Stories = () => {
  return (
    <div className='stories'>
        <div className="story-item">
          <div className="cover"></div>
          <img className='story-img' src={FoodStory} alt="" />
          <p>Natalie</p>
        </div>

        <div className="story-item">
          <div className="cover"></div>
          <img src={CarStory} alt="" />
          <p>Joshua</p>
        </div>

        <div className="story-item">
          <div className="cover"></div>
          <img className='story-img' src={GirlStory} alt="" />
          <p>Hana</p>
        </div>

        <div className="story-item">
          <div className="cover"></div>
          <img className='story-img' src={SnowStory} alt="" />
          <p>Michael</p>
        </div>

        <div className="story-item">
          <div className="cover"></div>
          <img className='story-img' src={BoardStory} alt="" />
          <p>Zach</p>
        </div>
    </div>
  )
}

export default Stories