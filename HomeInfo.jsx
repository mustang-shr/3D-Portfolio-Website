import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({text,link,btnText}) =>(
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn ">
            {btnText}
            <img src={arrow}  className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent ={
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi This is <span className="font-semibold">Shreyan</span>!
            Welcome to Shreyan's World
        </h1>
    ),
    2:(
       <InfoBox 
       text="Full Stack Web Development | AI/ML | IOT | Electronics | Research and many more"
       link ="/about"
       btnText="Deep Dive into Shreyan's World"
       />
    ),
    3:(
        <InfoBox 
        text="Experienced in working on many projects.Curious about them?"
        link ="/projects"
        btnText="Take a Tour!"
        />
    ),
    4:(
        <InfoBox 
        text="Making your life easier is my superpower. Let me know how I can help!"
        link ="/contact"
        btnText="Click here and Relax."
        />
    ),
    
}




const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
