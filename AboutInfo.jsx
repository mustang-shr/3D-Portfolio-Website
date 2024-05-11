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
           Deep Dive into Shreyan's World
        </h1>
    ),
    2:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Full Stack Web Development and Devops Internship
           <br />
           <p>Dreadnought : Sep'22-Oct'22</p>
        </h1>
    ),
    9:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Industrial Trainee | Summer Internship
           <br />
           <p>IISCO Steel Plant : May'23-Jun'23</p>
        </h1>
    ),
    10:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Project Management Simulation
           <br />
           <p>Accenture : Feb'24</p>
        </h1>
    ),
    11:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
          Sales and Management Internship
           <br />
           <p>Highradius : May'24-Current</p>
        </h1>
    ),
    3:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Full Stack Web Development | MERN Stack
           <br />
           <p>Cloud Computing and Devops- AWS , Azure</p>
        </h1>
    ),
    4:(
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Embedded Systems | IoT | Sensor Network
        </h1>
    ),
    5:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Electronics 
           <br />
           <p>VLSID, Control Systems, Digital and Analog Electronics,Communication 
            <br />
            Networks , Wireless Communication Systems, Inferential statistics</p>
        </h1>
    ),
    6:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Courses 
           <br />
           <p>ARTIFICIAL INTELLIGENCE & MACHINE LEARNING | Udemy 2023
            <br />
            GOOGLE CLOUD BOOTCAMP | GeekforGeeks 2023</p>
        </h1>
    ),
    7:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Courses 
           <br />
           <p>EMBEDDED SYSTEMS[ARDUINO , RASPBERRY PI] | Udemy 2023
            <br />
            AZURE A-Z 900 CHALLENGE | Microsoft 2024</p>
        </h1>
    ),
    8:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Certifications
           <br />
           <p>Certificate of Membership-IAENG | IAENG 2022
            <br />
            Certificate of Membership-IAENG | IAENG 2022</p>
        </h1>
    ),
    12:(
        <h1 className="sm:text-s sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Computer Science
           <br />
           <p>DBMS, OOPS , Cloud Computing
            <br />
            Operating systems,Software Engineering </p>
        </h1>
    ),
    13:(
        <h1 className="sm:text-l sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
           Programming Languages : 
           <br />
           <p>C, C++, JAVA, JAVASCRIPT ,PYTHON, HTML , Json
            <br />
            Data Structure and Algorithms </p>
        </h1>
    ),

}




const AboutInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default AboutInfo
