import React, { useState, useContext } from 'react';
import { NameContext } from '../../context/NameContext.jsx';
import { motion } from 'framer-motion';
import { ImCross } from 'react-icons/im';
import './editpopup.css';
import { useEffect } from 'react';

const EditPopUp = ({ closeModal }) => {

    const [nameContext, setNameContext] = useContext(NameContext);
    const [changedUserInfo, setChangedUserInfo] = useState(nameContext);
    const [successAlert, setSuccessAlert] = useState(false);

    const editUserInfo = (e) => {
      e.preventDefault();

      setNameContext(changedUserInfo);
      setSuccessAlert(true);

      setTimeout(() => {
        setSuccessAlert(false)
      }, 2000);
    }

  return (
        <div className="edit-form-container">
        <motion.form className="edit-form" animate={{ scale: 1.3 }} exit={{ scale: 1, y: "20px", opacity: 0 }} key="modal">
        <div className="modal-header">
            <h1>Edit</h1>
            <ImCross className="modal-icon" onClick={closeModal} />
        </div>
        <input type="text" className="edit-input" name="firstname" placeholder='First Name' value={changedUserInfo.firstName}  onChange={(e) => setChangedUserInfo({...changedUserInfo, firstName: e.target.value})} />
        <br />

        <input type="text" className="edit-input" name="lastname" placeholder='Last Name' value={changedUserInfo.lastName} onChange={(e) => setChangedUserInfo({...changedUserInfo, lastName: e.target.value})} />
        <br />

        <input type="text" className="edit-input" name="username" placeholder='User Name' value={changedUserInfo.userName} onChange={(e) => setChangedUserInfo({...changedUserInfo, userName: e.target.value})} />

        <button className="btn" onClick={(e) => editUserInfo(e)}>Confirm Changes</button>

        { successAlert ? <h3 className="success-msg">Successfully changed user info!</h3> : ''}
        </motion.form>
        </div>
  )
}

export default EditPopUp