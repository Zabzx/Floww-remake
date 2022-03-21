import React, { useState, useEffect } from 'react'
import './Profile.css'

const Profile = () => {
    
  const [userImage, setUserImage] = useState('')
  const [loadedUserImage, setLoadedUserImage] = useState('');
  
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
  return (
    <div>
        <h1>Profile</h1>
        <input type="file" onChange={(e) => {
        const file = e.target.files[0]
        setUserImage(file)
        }}/>
        <div className="user-img-container">
        <img src={loadedUserImage} alt="" />
        </div>
    </div>
  )
}

export default Profile