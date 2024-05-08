import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const Navigate=useNavigate();
  return (
   <>
    <div className='outer_div'>
        <div className='image'>
            <img src={logo} alt="" />
        </div>
        <div className='buttons'>
          <button className='button1' onClick={()=>Navigate("/form")}>Get Projects</button>
          <button className='button2'>Onboard Talent</button>
        </div>
    </div>
   </>
  )
}

export default Header