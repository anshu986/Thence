import React from 'react'
import './Main.css'
import { FaArrowRightLong } from "react-icons/fa6";
import girl_img from '../../images/girl_img.png'
import rocket from '../../images/rocket.svg'
// import border from '../../images/border.png'
const Main = () => {
  return (
   <>
    <div>
        <div>
            <p className='text1'>success stories</p>
            <p className='text2'>Every success journey
            <br /> we’ve encountered.</p>
        </div>
        <div className='main_container'>
            <div>
                <img src={girl_img} alt="" className='girlimg'/>
                <div className='box1'>
                    <p>40%</p>
                    <p>Achieved reduction in <br />project execution time <br />by optimising team <br />availability</p>
                </div>
                <div className='box2'>
                <img src={rocket} alt="" className='rocket_icon'/>
                    <div className='days'>
                    <div >10 DAYS</div>
                    <div>Staff Deployment</div>
                    </div>
                </div>
                <div className='box3'>
                    <p><span>$0.5</span>MILLION</p>
                    <p>Reduced client expenses <br />by saving on hiring and <br /> employee costs.</p>
                </div>
            </div>
            <div>
                <div className='main_sub_text'>Enhance fortune 50 <br />company’s insights <br /> teams research <br /> capabilities</div>
                <div className='carousel'>
                    <div className='dot1'></div>
                    <div className='dot2'></div>
                    <div className='dot3'></div>
                </div>

                <div><button className='main_sub_button'>Explore More <FaArrowRightLong/></button></div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Main