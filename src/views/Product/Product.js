
import Navbar from "../../components/Navbar/Navbar"

import SideBarLeft from "../../components/SideBarLeft/SideBarLeft"
import SideBarRight from "../../components/SideBarRight/SideBarRight"
import imgofbc from './background.webp'
import './Product.css'
export default function Product({imgofsidebar,slogen}){
    return(
       <div>
        <Navbar/>
       
        
       
       <div className="sideBar">
        <SideBarLeft/>
        <div className='sidebarright'>
        <span className='sidebarrighticon'><img src={imgofsidebar}   className='sidebarrightimg'/></span>
        <div className='SectionSevenSlogen sidebarrighthead'>{slogen}</div>
        <div className='SectionSeventext sidebarrighttext'>Personalise every experience along the <br/> customer journey on the  world's #1 CRM.
        </div> 
        <div className='sidebarrightanchor'>Explore the {slogen}</div>
        <ul>
            <li>What is Salesforce?</li>
            <li>Customer stories</li>
            <li>Solution Finder</li>
            <li>Small Business</li>
            <li>All Product</li>
        </ul>
<img src={imgofbc} className='sidebarrightbcimg'/>
       </div>
        
       </div>
     
     
       </div>
    )
}




// import './SideBarRight.css'
// // import img from "./img1.svg"
// import backgroundimg from './background.webp'

// export default function SideBarRight({imgofsidebar,slogen}){
//     return(
      
       
//        <div className='sidebarright'>
//         <span className='sidebarrighticon'><img src={imgofsidebar} className='sidebarrightimg'/></span>
//         <div className='SectionSevenSlogen sidebarrightsolgen'>{slogen}</div>
//         <div className='SectionSeventext sidebarrighttext'>Personalise every experience along the <br/> customer journey on the  world's #1 CRM.</div>
      
//         <div className='sidebarrightanchor'>Explore the Customer  360</div>
//         <ul>
//             <li>What is Salesforce?</li>
//             <li>Customer stories</li>
//             <li>Solution Finder</li>
//             <li>Small Business</li>
//             <li>All Product</li>
//         </ul>
// <img src={backgroundimg} className='sidebarrightbcimg'/>
//        </div>



     
//         )
// }