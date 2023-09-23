import Navbar from "../../components/Navbar/Navbar"
import PhoneBottom from "../../components/PhoneBottom/PhoneBottom"

import SideBarOfIndus from "../SideBarOfIndus/SideBarOfIndus"
import {DarkButton} from "../../components/Button/Button"
import Background from './backgroundimg.webp'
import Upimg from './bollon.webp'
import imgicon from './imgicon.webp'
import './Industries.css'
export default function Industries(){
    return(
        <div>
        <Navbar/>
       
        
       
       <div className="sideBar">
        <SideBarOfIndus/>
        <div className="phonebottom"><PhoneBottom head={"Explore Salesforce for Industries."} btntext={"see all industries"}/></div>

        <div className='sidebarright'>
            <img src={Upimg} className="industriesupimg"/>
            <div className="industriesbtn"><img src={imgicon} className="industriesicon"/></div>
        <div className='SectionSevenSlogen'>Explore Salesforce for <br/> Industries</div>
        <div className=' SectionSeventext textalign '>Get industry-specific innovations that <br/> modernise your business, speed up <br/> time to value and boost productivity.
        </div> 
        {/* <div className='sidebarrightanchor'>Get industry-specific innovations that <br/> modernise your business, speed up <br/> time to value and boost productivity.</div> */}
        <div className="industriesbtn"><DarkButton text={"See all industries"} color={"BlueButton"}/></div>
        <img src={Background} className="industriesbcimg"/>

       </div>
        
       </div>
     
     
       </div>
    )
}