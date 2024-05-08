import React, { useState } from 'react'
import './Question.css'
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { Data } from '../../Data';
const Question = () => {
    const [show,setShow]=useState(null)
    const toggle=(i)=>{
        if(show===i)
            {
                return setShow(null)
            }
            setShow(i);
    }
  return (
    <>
    <div className='question_container'>
    <div className='wrapper'>
            <div className='left'>
                <p>What’s on your mind</p>
                <p>Ask Questions</p>
            </div>
            <div className='right'>
                
                
                    {Data.map((item,i)=>
                    (
                        <div  key={i}>
                        <p className='question' onClick={()=>toggle(i)}>{item.question}  {show===i?<FiMinus/>:<FaPlus/>} </p>
                        <p className={show===i?'answer':'answer hideanswer'}>{item.answer}</p>
                        {i<4?<hr/>:""}
                        </div>
                        
                    ))}
                
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Question