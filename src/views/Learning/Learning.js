




import Navbar from "../../components/Navbar/Navbar"

import PhoneBottom from "../../components/PhoneBottom/PhoneBottom"

import LearningSideBar from "./LearningSideBar/LearningSideBar"
import bcimgbottom from './bcofbottom.webp'
import bcimgtop from './bcoftop.webp'
import { DarkButton } from "../../components/Button/Button"
import learningicon from './learningicon.webp'
import './Learning.css'



export default function Learning(){
    return(
        <div>
        <Navbar/>
       
        
       
       <div className="sideBar">
        <LearningSideBar/>
        <div className="phonebottom"><PhoneBottom head={"Become Trailblazer"} btntext={"Join for free"}/></div>
       
        <div className='sidebarright'>
        


<img src={bcimgtop} className="industriesupimg learningimgtop"/>
            <div className="industriesbtn"><img src={learningicon} className="industriesicon"/></div>
        <div className='SectionSevenSlogen'>Become a Trailblazer.</div>
        <div className='SectionSeventext textalign'>Unlock free hands-on learning, our <br/> global community, original series, and <br/> support.
        </div> 
       
        <div className="industriesbtn"><DarkButton text={"Join for free"} color={"BlueButton"}/></div>
        <img src={bcimgbottom} className="industriesbcimg"/>


        
       </div>
        
       </div>
     
     
       </div>
    )
}