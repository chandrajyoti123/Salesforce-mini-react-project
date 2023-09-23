




import Navbar from "../../components/Navbar/Navbar"


import {DarkButton} from "../../components/Button/Button"
import SideBarSales from "./SideBarSales/SideBarSales"
import PhoneBottom from "../../components/PhoneBottom/PhoneBottom"

import bcupimg from './bcimgtop.webp'
import bcinimg from './bcimgbottom.webp'

export default function SalesForce(){
    return(
        <div>
        <Navbar/>
       
        
       
       <div className="sideBar">
        <SideBarSales/>
        <div className="phonebottom"><PhoneBottom head={"Explore Salesforce+"} btntext={"Visit Salesforce+"}/></div>
       
        <div className='sidebarright'>
            
          <img src={bcupimg} className="backgroundimgup"/>  
        <div className='SectionSevenSlogen'>Explore Salesforce+</div>
        <div className='SectionSeventext textalign'>Get inspired with free access to award- <br/> winning original series and live <br/> experiences.
        </div> 
        
        <div className="industriesbtn"><DarkButton text={"Visit Salesforce+"} color={"BlueButton"}/></div>
    
        
        <img src={bcinimg} className="backgroundimgdown"/>
       </div>
        
       </div>
     
     
       </div>
    )
}
