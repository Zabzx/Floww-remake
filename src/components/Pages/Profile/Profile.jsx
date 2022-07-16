import React, { useState, useEffect, useContext } from 'react'
import { PfpContext } from '../../../context/PfpContext';
import { LikedPostContext } from '../../../context/LikedPostsContext';
import { BsPatchCheckFill } from 'react-icons/bs'
import Nav from '../../Navigation/Nav';
import PlaceholderPfp from '../../../assets/placeholder-pfp.jpg'
import { BsHeart, BsBookmarkCheck } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import './Profile.css'
import { NameContext } from '../../../context/NameContext';
import EditPopUp from '../../EditPopUp/EditPopUp';
import { AnimatePresence } from 'framer-motion';

const Profile = () => {
    
  //State
  const [userImage, setUserImage] = useState('');
  const [loadedUserImage, setLoadedUserImage] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  //Alert state
  const [hasPfp, sethasPfp] = useState(false)

  //Context
  const [userPfp, setuserPfp] = useContext(PfpContext);
  const [likedPosts, setLikedPosts] = useContext(LikedPostContext);
  const [userInfo, setUserInfo] = useContext(NameContext);

  useEffect(() => {
    console.log(likedPosts)
  }, []);
  
  useEffect(() => {
      if (userImage) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setLoadedUserImage(reader.result)
          }
          reader.readAsDataURL(userImage)
      } else {
          setLoadedUserImage(null)
      }
  }, [userImage])

  const setPfp = () => {
    if (userImage) {
      setuserPfp(loadedUserImage)
      sethasPfp(true);

      setTimeout(() => {
        sethasPfp(false);
      }, 3000)
    } else {
      alert("Please select a valid image.");
      return;
    }
  }

  const editUserInfo = () => {
    setShowEditModal(true)
  }
  const closeModal = () => {
    setShowEditModal(false)
  }

  return (
    <>
    <Nav useLinks={false}/>
    <AnimatePresence>
    { showEditModal ? <EditPopUp closeModal={closeModal} /> : ''}
    </AnimatePresence>
    <div className='profile profile-container'>
        <div className="profile-input">
        <h1>Change profile picture</h1>
        <input className='pfp-input' type="file" onChange={(e) => {
        const file = e.target.files[0];
        setUserImage(file)
        }}/>
        <br />
        <button className="btn profile-btn" onClick={setPfp}>Set Profile Picture</button>
        </div>
        <div className="profile-image">
        <img src={userPfp ? userPfp : (
          loadedUserImage ? loadedUserImage : PlaceholderPfp
        )} alt="" />

        <h1>{userInfo.firstName + ' ' + userInfo.lastName}</h1>
        <h2>Username: {userInfo.userName}</h2>
        <button className="btn profile-edit" onClick={editUserInfo}>Edit</button>
        </div>
    </div>

    {/* Liked Posts */}
    <div className={hasPfp ? "alert alert-active" : "alert"}>New Profile Picture Added! <BsPatchCheckFill/></div>

      { likedPosts.length !== 0 ? <div>
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
    </div> : 
    <div className="profile-container">
      No liked posts yet
    </div>}
    </>
  )
}

export default Profile