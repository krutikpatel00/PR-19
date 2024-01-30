import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";


const SignUp = () => {
  return (
    <div className='sign-up'>
      <div className="container">
        <div className='sign-up-items text-center position-relative'>
          <p>Sign up and get 20% off to your first order. <Link to=''> Sign Up Now</Link> </p>
          <IoMdClose className='position-absolute' />
        </div>
      </div>
    </div>
  )
}

export default SignUp