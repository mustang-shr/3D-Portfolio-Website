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
            Let's have a look at Shreyan's works
        </h1>
    ),
    2:(
       <InfoBox 
       text="IMDB | TMDB Website Clone [HTML,CSS,React.js, API Integration]"

       link ="https://github.com/mustang-shr/imdb-tmdb"
       btnText="Experience"
       />
    ),
    3:(
        <InfoBox 
        text="Myoelectric Prosthetic Arm | [IoT,Embedded Systems,Human Anatomy,Sensors]"
        link ="https://github.com/mustang-shr/Myoelectric-Prosthetic-Arm"
        btnText="Experience"
        />
    ),
    4:(
        <InfoBox 
        text="Lyrics finder | [HTML,CSS,Javascript]"
        link ="https://github.com/mustang-shr/lyrics-finder"
        btnText="Experience"
        />
    ),
    
    5:(
        <InfoBox 
        text="News APP | [HTML,CSS,Javascript,Api Integration]"
        link ="https://github.com/mustang-shr/newsapp"
        btnText="Experience"
        />
    ),
}




const ProjectInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default ProjectInfo
