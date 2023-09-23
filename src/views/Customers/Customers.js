




import Navbar from "../../components/Navbar/Navbar"

import PhoneBottom from "../../components/PhoneBottom/PhoneBottom"

import SideBarCust from "./SideBarCust/SideBarCust"
import bcimgbottom from './bcimgbottom.webp'
import bcimgtop from './bcimgtop.webp'
import { DarkButton } from "../../components/Button/Button"
import learningicon from './companyicon.webp'




export default function Customers(){
    return(
        <div>
        <Navbar/>
       
        
        <div className="phonebottom"><PhoneBottom head={"Hear our story"} btntext={"Learn about us"}/></div>
       <div className="sideBar">
        <SideBarCust/>
        {/* Question? We can help */}
       
        <div className='sidebarright'>
        


<img src={bcimgtop} className="industriesupimg learningimgtop"/>
            <div className="industriesbtn"><img src={learningicon} className="industriesicon"/></div>
        <div className='SectionSevenSlogen'>Hear our Story</div>
        <div className='SectionSeventext textalign'> We believe in building relationships - <br/> not just between companies and <br/> customers, but among our global <br/> communities. </div> 
       
        <div className="industriesbtn"><DarkButton text={"Learn about us"} color={"BlueButton"}/></div>
        <img src={bcimgbottom} className="industriesbcimg"/>


        
       </div>
        
       </div>
     
     
       </div>
    )
}