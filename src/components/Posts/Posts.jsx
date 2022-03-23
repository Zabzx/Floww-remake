import React, {useState, useContext} from 'react'
import './Posts.css'
import { PostContext } from '../../context/PostContext'
import { NameContext } from '../../context/NameContext'
import { PfpContext } from '../../context/PfpContext'
import { BsHeart, BsBookmarkCheck } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import DefaultPfp from '../../assets/default-pfp.jpg'

const Posts = () => {

  const [postInputValue, setPostInputValue] = useState('')
  const [postReady, setPostReady] = useState(false)
  const [names, setNames] = useContext(NameContext);
  const [userPfp, setUserPfp] = useContext(PfpContext)

  const postValid = (e) => {
    if (e.target.value !== '') {
      setPostReady(true)
    } else {
      setPostReady(false)
    }
  }

  const uploadPost = (e) => {
    e.preventDefault()

    let value = postInputValue;

    if (value === '') {
      return;
    }

    if (!userPfp) {
    setPosts([{content: value, pfp: DefaultPfp, name: names.username}, ...posts])
    } else {
      setPosts([{content: value, pfp: userPfp, name: names.username}, ...posts])
    }

    e.target.value = ''

  }

  const [posts, setPosts] = useContext(PostContext)

  return (
    <div className="posts">

        <form action="" className='form-active post-form'>
          <input type="text" name='post' className='post-input' placeholder="What's on your mind?" onChange={(e) => {setPostInputValue(e.target.value)
          postValid(e)}} />
          <button className={!postReady ? 'btn-gray' : 'btn post-btn'} onClick={(e) => uploadPost(e)}>Post</button>
        </form>

    {posts.map((post) => {
        return (
            <div className='post' key={post.id}>
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