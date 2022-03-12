import React from 'react'
import './SignUp.css'
import {SiDialogflow} from 'react-icons/si'
import SignUpImage from '../../assets/SignUpImage.svg'

const SignUp = () => {
  return (
    <div className="signup">
        <div className="intro">
            <SiDialogflow className='logo'/>
            <h1>Get Ready to build meaningful experiences with Floww</h1>
            <img src={SignUpImage} className="left-img" alt="Interaction" />
        </div>

        <form action="" className='right'>
            <h1>Floww Sign Up</h1>

            <div className='input-item'>
                <input type="text" name="firstname" placeholder="First Name" />
            </div>

            <div className='input-item'>
                <input type="text" name="lastname" placeholder="Last Name" />
            </div>

            <div className='input-item'>
                <input type="date" className='date' />
            </div>

            <button className="btn">Next</button>
        </form>
    </div>
  )
}

export default SignUp