
import Navbar from "../../components/Navbar/Navbar"
import img from './img1.svg'
import SideBarLeft from "../../components/SideBarLeft/SideBarLeft"
import SideBarRight from "../../components/SideBarRight/SideBarRight"
import imgofbc from './background.webp'
import './Product.css'
import PhoneBottom from "../../components/PhoneBottom/PhoneBottom"
export default function Product({imgofsidebar,slogen}){
    return(
       <div>
        <Navbar/>
       
        
       
       <div className="sideBar">
        <SideBarLeft/>


        <div className="phonebottom"><PhoneBottom head={"Explore Customer 360"} btntext={"see all Salesforce  product"}/></div>


        
        <div className='sidebarright'>
        <span className='sidebarrighticon'><img src={imgofsidebar==null?img:imgofsidebar}   className='sidebarrightimg'/></span>
        <div className='SectionSevenSlogen sidebarrighthead'>{slogen==null?"Customer 360":slogen}</div>
        <div className='SectionSeventext sidebarrighttext'>Personalise every experience along the <br/> customer journey on the  world's #1 CRM.
        </div> 
        <div className='sidebarrightanchor'>Explore the {slogen==null?"Customer 360":slogen}</div>
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