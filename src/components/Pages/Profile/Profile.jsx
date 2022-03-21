import React, { useState, useEffect, useContext } from 'react'
import { PfpContext } from '../../../context/PfpContext';
import Nav from '../../Navigation/Nav';
import './Profile.css'

const Profile = () => {
    
  const [userImage, setUserImage] = useState('')
  const [loadedUserImage, setLoadedUserImage] = useState('');
  const [userPfp, setuserPfp] = useContext(PfpContext)
  
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
  }
  return (
    <>
    <Nav/>
    <div className='profile'>
        <h1>Change profile picture</h1>
        <input className='pfp-input' type="file" onChange={(e) => {
        const file = e.target.files[0]
        setUserImage(file)
        }}/>
        <div className="user-img-container">
        <img src={loadedUserImage} alt="" />
        </div>

        <button className="btn" onClick={setPfp}>Set Profile Picture</button>
    </div>
    </>
  )
}

export default Profile