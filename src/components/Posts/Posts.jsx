import React, {useState} from 'react'
import './Posts.css'
import { BsHeart, BsBookmarkCheck } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import SETUP from '../../assets/setup.jpg'
import DefaultPfp from '../../assets/default-pfp.jpg'

const Posts = () => {

  const [posts, setPosts] = useState([
      {
          id: 1,
          pfp: DefaultPfp,
          name: 'Natalie Williams',
          img: SETUP,
          date: '3 minutes ago',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aperiam error aliquam consectetur ipsam harum eligendi perspiciatis, quae nulla.'
      },
      {
        id: 2,
        pfp: DefaultPfp,
        name: 'Natalie Williams',
        img: SETUP,
        date: '3 minutes ago',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aperiam error aliquam consectetur ipsam harum eligendi perspiciatis, quae nulla.'
      },
      {
        id: 3,
        pfp: DefaultPfp,
        name: 'Natalie Williams',
        img: SETUP,
        date: '3 minutes ago',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aperiam error aliquam consectetur ipsam harum eligendi perspiciatis, quae nulla.'
      },
      {
        id: 4,
        pfp: DefaultPfp,
        name: 'Natalie Williams',
        img: SETUP,
        date: '3 minutes ago',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aperiam error aliquam consectetur ipsam harum eligendi perspiciatis, quae nulla.'
      },
      {
        id: 5,
        pfp: DefaultPfp,
        name: 'Natalie Williams',
        img: SETUP,
        date: '3 minutes ago',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab aperiam error aliquam consectetur ipsam harum eligendi perspiciatis, quae nulla.'
      }
  ]);

  return (
    <div className="posts">

    {posts.map((post) => {
        return (
            <div className='post' id={post.id}>
        <div className="post-header">
            <img src={post.pfp} alt="" className="user-pfp" />
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