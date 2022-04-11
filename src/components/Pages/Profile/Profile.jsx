import React, { useState, useEffect, useContext } from 'react'
import { PfpContext } from '../../../context/PfpContext';
import { BsPatchCheckFill } from 'react-icons/bs'
import Nav from '../../Navigation/Nav';
import PlaceholderPfp from '../../../assets/placeholder-pfp.jpg'
import './Profile.css'

const Profile = () => {
    
  const [userImage, setUserImage] = useState('')
  const [loadedUserImage, setLoadedUserImage] = useState('');
  const [userPfp, setuserPfp] = useContext(PfpContext);

  //Alert state
  const [hasPfp, sethasPfp] = useState(false)
  
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
    <Nav navlink={'Home'}/>
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
    </>
  )
}

export default Profile