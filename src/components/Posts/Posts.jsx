import React, {useState} from 'react'
import './Posts.css'
import { BsHeart, BsBookmarkCheck } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import SETUP from '../../assets/setup.jpg'
import DefaultPfp from '../../assets/default-pfp.jpg'

//Pfp Images
import NATALIE from '../../assets/natalie-pfp.jpg'
import JOSHUA from '../../assets/joshua-pfp.jpg'
import HANA from '../../assets/hana-pfp.jpg'
import MICHAEL from '../../assets/michael-pfp.jpg'
import ZACH from '../../assets/zach-pfp.jpg'
//Post Images
import STRAWBERRIES from '../../assets/strawberries.jpg'
import BMW from '../../assets/bmw.jpg'
import FLOWERS from '../../assets/flowers.jpg'
import TABLET from '../../assets/tablet.jpg'
import SNOW from '../../assets/snow.jpg'

const Posts = () => {

  const [posts, setPosts] = useState([
      {
          id: 1,
          pfp: NATALIE,
          name: 'Natalie Piquette',
          img: STRAWBERRIES,
          date: '3 minutes ago',
          content: 'Starting the morning off with yummy strawberries.😋🍓'
      },
      {
        id: 2,
        pfp: JOSHUA,
        name: 'Joshua Rhode',
        img: BMW,
        date: '23 minutes ago',
        content: "Took her on a joyride today, she's as beautiful as the day I met her."
      },
      {
        id: 3,
        pfp: HANA,
        name: 'Hana Orihime',
        img: FLOWERS,
        date: '8 minutes ago',
        content: "Getting better at photographt 🥺💜 absolutely love this shot!"
      },
      {
        id: 4,
        pfp: MICHAEL,
        name: 'Michael Cole',
        img: TABLET,
        date: '30 minutes ago',
        content: 'Relaxing on the weekend.'
      },
      {
        id: 5,
        pfp: ZACH,
        name: 'Zach',
        img: SNOW,
        date: '2 minutes ago',
        content: 'Take me back ⛷🏔⛄ I missed this place so much!'
      }
  ]);

  return (
    <div className="posts">

    {posts.map((post) => {
        return (
            <div className='post' id={post.id}>
        <div className="post-header">
          <div className="user-pfp">
            <img src={post.pfp} alt="" />
            </div>
            <h1 className="user-name">{post.name}</h1>
        </div>
        <img className='post-img' src={post.img} alt="" />
        <p className="post-date">{post.date}</p>
        <p className="post-content">{post.content}</p>

        <div className="post-interact">
            <BsHeart/>
            <FaRegComment/>
            <BsBookmarkCheck className='bookmark'/>
        </div>
    </div>
        )
    })}
    
    </div>
  )
}

export default Posts