import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImCross } from 'react-icons/im';
import './editpopup.css';

const EditPopUp = () => {

    const [changedUserInfo, setChangedUserInfo] = useState({
        fristName: "",
        lastName: "",
        userName: ""
    });

  return (
    <motion.div className="edit-form-container">
        <form className="edit-form">
        <div className="modal-header">
            <h1>Edit</h1>
            <ImCross />
        </div>
        <input type="text" className="edit-input" name="firstname" placeholder='First Name' onChange={(e) => setChangedUserInfo({...changedUserInfo, firstName: e.target.value})} />
        <br />

        <input type="text" className="edit-input" name="lastname" placeholder='Last Name' onChange={(e) => setChangedUserInfo({...changedUserInfo, lastName: e.target.value})} />
        <br />

        <input type="text" className="edit-input" name="username" placeholder='User Name' onChange={(e) => setChangedUserInfo({...changedUserInfo, userName: e.target.value})} />
        </form>
    </motion.div>
  )
}

export default EditPopUp