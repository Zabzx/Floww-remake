import React from 'react'
import SignUp from './components/SignUp/SignUp'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
    <SignUp/>
    <Link to="/home">Home</Link>
    </>
  )
}

export default App