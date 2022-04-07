import React, {useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import { NameContext } from '../../context/NameContext'
import {SiDialogflow} from 'react-icons/si'
import SignUpImage from '../../assets/SignUpImage.svg'

const SignUp = () => {

//Context
const [names, setNames] = useContext(NameContext)

 //Form Validation
 const [userFirstName, setUserFirstName] = useState('')
 const [userLastName, setUserLastName] = useState('')
 const [userDate, setUserDate] = useState('')
 const [userUsername, setUserUsername] = useState('')
 const [userPassword, setUserPassword] = useState('')
 const [userConfirmedPassword, setUserConfirmedPassword] = useState('')

//Toggling Forms
const [formIndex, setFormIndex] = useState(0);

// Change form function
const slideForm = (e) => {
    e.preventDefault();

    if (userFirstName === '' || userLastName === '') {
        alert('Please fill all fields.')
        return;
    }
    if (userDate === '' ) {
        alert('Please enter a date of birth.')
        return;
    }
    console.log(userFirstName)
    setFormIndex(formIndex + 1);
}

//Previous form function
const previous = (e) => {
    e.preventDefault();
    setFormIndex(formIndex - 1);
}

//Submit form function

 let navigate = useNavigate()

 const submit = (e) => {
    e.preventDefault();

    if (userUsername === '') {
        alert('Please enter a username.')
        return;
    }

    if (userUsername.length < 3) {
        alert('Username too short.')
        return;
    }

    if (userPassword ===  '') {
        alert('Enter a password.')
        return;
    }

    if (userPassword.length < 8) {
        alert('Password is too short.')
        return;
    }

    if (userPassword !== userConfirmedPassword) {
        alert(`Passwords don't match.`)
    }

    navigate('/home')
    document.title = 'Floww | Home'
}

useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 13 && formIndex === 0) {
          slideForm(e);
      } else if (e.keyCode === 13 && formIndex === 1) {
          submit(e);
      }
    }
  
    document.addEventListener('keydown', listener);
    // Cleanup later by removing the listener
    return () => document.removeEventListener('keydown', listener)
  }, [userFirstName, userLastName, userDate, userUsername, userPassword, userConfirmedPassword])

  return (
    <div className="signup">
        <div className="intro">
            <SiDialogflow className='logo'/>
            <h1>Get Ready to build meaningful experiences with Floww</h1>
            <img src={SignUpImage} className="left-img" alt="Interaction" />
        </div>

        <form action="" className={ formIndex === 0 ? `form-active form-right` : 'sign-in-form'}>
            <h1>Floww Sign Up</h1>

            <div className='input-item'>
                <input type="text" name="firstname" placeholder="First Name" onChange={(e) => {setUserFirstName(e.target.value)
                setNames({...names, firstname: e.target.value})}} />
            </div>

            <div className='input-item'>
                <input type="text" name="lastname" placeholder="Last Name" onChange={(e) => {setUserLastName(e.target.value)
                setNames({...names, lastname: e.target.value})}} />
            </div>

            <div className='input-item'>
                <input type="date" className='date' onChange={(e) => setUserDate(e.target.value)} />
            </div>

            <button className="btn next-btn s-btn" onClick={(e) => slideForm(e)}>Next</button>
        </form>

        <form action="" className={ formIndex === 1 ? `form-active form-right` : 'sign-in-form'}>
            <h1>Floww Sign Up</h1>

            <div className='input-item'>
                <input type="text" name="username" placeholder="Username" onChange={(e) => {setUserUsername(e.target.value)
                setNames({...names, username: e.target.value})}} />
            </div>

            <div className='input-item'>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
            </div>

            <div className='input-item'>
                <input type="password" name="password-confirm" placeholder="Confirm Password" onChange={(e) => setUserConfirmedPassword(e.target.value)} />
            </div>
            <div className="final-form-btns">
            <button className="btn prev-btn s-btn" onClick={(e) => previous(e)}>Previous</button>
            <button className="btn s-btn" onClick={(e) => submit(e)}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp