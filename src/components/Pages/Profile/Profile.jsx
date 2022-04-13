import React, { useState, useEffect, useContext } from 'react'
import { PfpContext } from '../../../context/PfpContext';
import { LikedPostContext } from '../../../context/LikedPostsContext';
import { BsPatchCheckFill } from 'react-icons/bs'
import Nav from '../../Navigation/Nav';
import PlaceholderPfp from '../../../assets/placeholder-pfp.jpg'
import { BsHeart, BsBookmarkCheck } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import './Profile.css'

const Profile = () => {
    
  //State
  const [userImage, setUserImage] = useState('')
  const [loadedUserImage, setLoadedUserImage] = useState('');

  //Alert state
  const [hasPfp, sethasPfp] = useState(false)

  //Context
  const [userPfp, setuserPfp] = useContext(PfpContext);
  const [likedPosts, setLikedPosts] = useContext(LikedPostContext)
  
  useEffect(() => {
      if (userImage) {
          const reader = new FileReader()
          reader.onloadend = () => {
              setLoadedUserImage(reader.result)
          }
          reader.readAsDataURL(userImage)
      } else {
          setLoadedUserImage(null)
      }
  }, [userImage])

  const setPfp = () => {
      setuserPfp(loadedUserImage)
      sethasPfp(true);

      setTimeout(() => {
        sethasPfp(false);
      }, 3000)
  }
  return (
    <>
    <Nav useLinks={false}/>
    <div className='profile profile-container'>
        <div className="profile-input">
        <h1>Change profile picture</h1>
        <input className='pfp-input' type="file" onChange={(e) => {
        const file = e.target.files[0]
        setUserImage(file)
        }}/>
        <br />
        <button className="btn" onClick={setPfp}>Set Profile Picture</button>
        </div>
        <div className="profile-image">
        <img src={loadedUserImage ? loadedUserImage : PlaceholderPfp} alt="" />
        </div>
    </div>
    <div className={hasPfp ? "alert alert-active" : "alert"}>New Profile Picture Added! <BsPatchCheckFill/></div>

      <h1 className='profile-container'>Liked Posts</h1>
      <div className="liked-posts profile-container">
      {likedPosts.map((post) => {
        return (
        <div className='liked-post' key={post.id}>
        <div className="liked-post-header">
          <div className="user-pfp">
            <img src={post.pfp} alt="" />
            </div>
            <h1 className="user-name">{post.name}</h1>
        </div>
        <img className='post-img' src={post.img} alt="" />
        <p className="post-date">{post.date}</p>
        <p className="post-content">{post.content}</p>

        <div className="liked-post-interact">
            <FaRegComment className='color-red'/>
            <BsBookmarkCheck className='bookmark'/>
        </div>
      </div>
        )
      })}
    </div>
    </>
  )
}

export default Profile