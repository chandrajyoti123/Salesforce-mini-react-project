// import Navbar from "../../components/Navbar/Navbar"
// import SectionOne from "../SectionOne/SectionOne"
// export default function Company(){
//     return(
//        <div>
//         <Navbar/>
//         <SectionOne/>
//        </div>
//     )
// }




import Navbar from "../../components/Navbar/Navbar"


import {DarkButton} from "../../components/Button/Button"
import SideBarCompany from "./SideBarCompany/SideBarCompany"

import bcupimg from './bcupimg.webp'
import bcinimg from './bcdownimg.webp'
import './Company.css'
export default function Company(){
    return(
        <div>
        <Navbar/>
       
        
       
       <div className="sideBar">
        <SideBarCompany/>
       
        <div className='sidebarright'>
            
          <img src={bcupimg} className="backgroundimgup"/>  
        <div className='SectionSevenSlogen'>Explore succes Stories</div>
        <div className='SectionSeventext '>See how our customers transform their <br/> businesses with AI + Data + CRM.
        </div> 
        {/* <div className='sidebarrightanchor'>Get industry-specific innovations that <br/> modernise your business, speed up <br/> time to value and boost productivity.</div> */}
        <div className="industriesbtn"><DarkButton text={"See all Stories"} color={"BlueButton"}/></div>
    
        
        <img src={bcinimg} className="backgroundimgdown"/>
       </div>
        
       </div>
     
     
       </div>
    )
}