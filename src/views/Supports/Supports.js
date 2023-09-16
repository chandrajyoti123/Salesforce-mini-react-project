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


import { DarkButton } from "../../components/Button/Button"
import SideBarSup from "./SideBarSup/SideBarSup"

import bcimgtop from './bcimgtop.webp'
import bcimgbottom from './bcimgbottom.webp'

export default function Company(){
    return(
        <div>
        <Navbar/>
       
        
       
       <div className="sideBar">
        <SideBarSup/>
       
        <div className='sidebarright'>
            
          <img src={bcimgtop} className="backgroundimgup"/>  
        <div className='SectionSevenSlogen'>Question? We can help</div>
        <div className='SectionSeventext '>Find critical answers for all things <br/> Salesforce - search resources, browse <br/> documentation, log cases, and more
        </div> 
        {/* <div className='sidebarrightanchor'>Get industry-specific innovations that <br/> modernise your business, speed up <br/> time to value and boost productivity.</div> */}
        <div className="industriesbtn"><DarkButton text={"visit the Help Center"} color={"BlueButton"}/></div>
    
        
        <img src={bcimgbottom} className="backgroundimgdown"/>
       </div>
        
       </div>
     
     
       </div>
    )
}