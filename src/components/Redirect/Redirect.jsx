import React, { useState,useEffect } from 'react'
import './Redirect.css'
import img from '../../images/logo.png'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Redirect = () => {
  const Navigate =useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    let timer;
    if (countdown > 0) {
        timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
    }
    return () => {
        clearInterval(timer);
    };
}, [countdown]);
if(countdown===0)
  {
    Navigate('/')
  }
  return (
    <>
      <div className='header'>
        <img src={img} alt="" />
    </div>

    <div className='main_div'>
    <div className='container'>
    <FaCheckCircle className='submit_icon'/>
    </div>
      
      <p className='success_msg'>Success Submitted</p>
      <p className='congratulations'>Congratulations</p>
      <p className='msg_popup'>Your request has been successfully submitted to us. We <br />
      will validate your information and reach out to your <br />
      shortly with updates</p>
    </div>
    <div className='redirect_msg'>
    Redirecting you to Homepage in <span>{countdown} Seconds</span>
    </div>
    </>
  )
}

export default Redirect