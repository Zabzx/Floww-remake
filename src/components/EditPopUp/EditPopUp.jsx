import React, { useState, useContext, useRef } from 'react';
import { NameContext } from '../../context/NameContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { ImCross } from 'react-icons/im';
import './editpopup.css';

const EditPopUp = () => {

    const [changedUserInfo, setChangedUserInfo] = useState({
        firstName: "",
        lastName: "",
        userName: ""
    });

    const [nameContext, setNameContext] = useContext(NameContext);

    const editUserInfo = (e) => {
      e.preventDefault();

      setNameContext(changedUserInfo);
    }

    const closeModal = () => {
      console.log(modalRef.current)
      modalRef.current.style.transform = 'scale(0)'
    }

    const modalRef = useRef();

  return (
    <AnimatePresence>
        <div className="edit-form-container">
        <motion.form className="edit-form" animate={{scale: 1.3}}>
        <div className="modal-header">
            <h1>Edit</h1>
            <ImCross className="modal-icon" onClick={closeModal} />
        </div>
        <input type="text" className="edit-input" name="firstname" placeholder='First Name' onChange={(e) => setChangedUserInfo({...changedUserInfo, firstName: e.target.value})} />
        <br />

        <input type="text" className="edit-input" name="lastname" placeholder='Last Name' onChange={(e) => setChangedUserInfo({...changedUserInfo, lastName: e.target.value})} />
        <br />

        <input type="text" className="edit-input" name="username" placeholder='User Name' onChange={(e) => setChangedUserInfo({...changedUserInfo, userName: e.target.value})} />

        <button className="btn" onClick={(e) => editUserInfo(e)}>Confirm Changes</button>
        </motion.form>
        </div>
    </AnimatePresence>
  )
}

export default EditPopUp