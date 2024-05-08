import React, { useState } from 'react'
import img from '../../images/logo.png'
import { RiCloseLargeFill } from "react-icons/ri";
import './Login.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaCircleExclamation } from "react-icons/fa6";

const Login = () => {
  const Navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
      setIsValid(true);
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
      setIsValid(true);
        setEmail(e.target.value);
    };
    const isSubmitDisabled = !name || !email || !isValid;
  
    const validateEmail = () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        setIsValid(false);
    } else {
        Navigate('/submit')
    }};
  return (
    <>
    <div className='header'>
        <img src={img} alt="" />
        <RiCloseLargeFill className='icon'  onClick={()=>Navigate("/")}/>

    </div>
    <div className='loginpopup'>
    <div>
        <p>Registration Form</p>
        <p>Start your success <br />Journey here!</p>
    </div>
    <div className='credentials'>
        <input type="text" placeholder='Enter your name' onChange={handleNameChange}/>
        <input type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        />
        {!isValid && <p className='email'> <FaCircleExclamation/> Enter a valid email address</p>}
        <button className={isSubmitDisabled===true?'disabled_btn':'submit_btn'} onClick={validateEmail} >Submit</button>
    </div>
    </div>

    </>
  )
}

export default Login