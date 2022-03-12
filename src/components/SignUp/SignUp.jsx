import React, {useState} from 'react'
import './SignUp.css'
import {SiDialogflow} from 'react-icons/si'
import SignUpImage from '../../assets/SignUpImage.svg'

const SignUp = () => {

//Toggling Forms
const [formIndex, setFormIndex] = useState(0);

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
    setFormIndex(formIndex + 1);
}

const previous = (e) => {
    e.preventDefault();
    setFormIndex(formIndex - 1);
}

 //Form Validation
 const [userFirstName, setUserFirstName] = useState('')
 const [userLastName, setUserLastName] = useState('')
 const [userDate, setUserDate] = useState('')
 const [userUsername, setUserUsername] = useState('')
 const [userPassword, setUserPassword] = useState('')
 const [userConfirmedPassword, setUserConfirmedPassword] = useState('')

 const submit = (e) => {
    e.preventDefault();
    if (userUsername.length < 3) {
        alert('Username too short.')
        return;
    }

    if (userPassword.length < 8) {
        alert('Password is too short.')
        return;
    }

    if (userPassword !== userConfirmedPassword) {
        alert(`Passwords don't match.`)
    }
}

  return (
    <div className="signup">
        <div className="intro">
            <SiDialogflow className='logo'/>
            <h1>Get Ready to build meaningful experiences with Floww</h1>
            <img src={SignUpImage} className="left-img" alt="Interaction" />
        </div>

        <form action="" className={ formIndex === 0 ? `form-active right` : ''}>
            <h1>Floww Sign Up</h1>

            <div className='input-item'>
                <input type="text" name="firstname" placeholder="First Name" onChange={(e) => setUserFirstName(e.target.value)} />
            </div>

            <div className='input-item'>
                <input type="text" name="lastname" placeholder="Last Name" onChange={(e) => setUserLastName(e.target.value)} />
            </div>

            <div className='input-item'>
                <input type="date" className='date' onChange={(e) => setUserDate(e.target.value)} />
            </div>

            <button className="btn" onClick={(e) => slideForm(e)}>Next</button>
        </form>

        <form action="" className={ formIndex === 1 ? `form-active right` : ''}>
            <h1>Floww Sign Up</h1>

            <div className='input-item'>
                <input type="text" name="firstname" placeholder="Username" onChange={(e) => setUserUsername(e.target.value)} />
            </div>

            <div className='input-item'>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
            </div>

            <div className='input-item'>
                <input type="password" name="password-confirm" placeholder="Confirm Password" onChange={(e) => setUserConfirmedPassword(e.target.value)} />
            </div>

            <button className="btn prev-btn" onClick={(e) => previous(e)}>Previous</button>
            <button className="btn" onClick={(e) => submit(e)}>Submit</button>
        </form>
    </div>
  )
}

export default SignUp