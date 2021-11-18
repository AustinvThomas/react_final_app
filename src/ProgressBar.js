import React from 'react'
import "./ProgressBar.css"
const ProgressBar = ({bgcolor,progress,height}) => {
    return (
        
        <div className="circle_box">
            
             <div className="circular">
            <div className="inner"></div>
            <div className = "outercicle" >
            <div className="outer"></div>
            </div>
            <div className="numb">
                <p>95<span className="percent">%</span></p>
            </div>
            <div className="circle">
               <div className="dot" >
                  <span></span>
               </div>
               <div className="bar left">
                  <div className="progress"></div>
               </div>
               <div className="bar right">
                  <div className="progress"></div>
               </div>
            </div>
         </div>
            
    </div>
    )
}
  
export default ProgressBar;