import './SideBarLeft.css'
import ProductBar from '../ProductBar/ProductBar'
import { Link } from 'react-router-dom'
import img1 from "./img1.svg"
import img2 from "./img2.svg"
import img3 from "./img3.svg"
import img4 from "./img4.svg"
import img5 from "./img5.svg"
import img6 from "./img6.svg"
import img7 from "./img7.svg"
import img8 from "./img8.svg"
import img9 from "./img9.svg"
import img10 from "./img10.svg"
import img11 from "./img11.svg"
import img12 from "./img12.svg"
import img13 from "./img13.svg"
import img14 from "./img14.svg"





export default function SideBarLeft(){
    return(
     
         <div className="leftsidebar">
            <div className='slogen' >Product</div>
            
         
<div className='leftsidebarlist'>  
 <Link to="/bar1" className='leftsidebarlistlink'><ProductBar imgofproductbar={img1} producttext={"customer 360"}/></Link>
<Link to='/bar2' className='leftsidebarlistlink'><ProductBar imgofproductbar={img2} producttext={"Small Business"}/></Link>
 <Link to='/bar3' className='leftsidebarlistlink'><ProductBar imgofproductbar={img3} producttext={"Artificial Intellingece"}/></Link>
 <Link to='/bar4' className='leftsidebarlistlink'><ProductBar imgofproductbar={img4} producttext={"Sales"}/></Link>
<Link to='/bar5' className='leftsidebarlistlink'><ProductBar imgofproductbar={img5} producttext={"Service"}/></Link>
<Link to='/bar6' className='leftsidebarlistlink'><ProductBar imgofproductbar={img6} producttext={"Marketing"}/></Link>
<Link to='/bar7' className='leftsidebarlistlink'><ProductBar imgofproductbar={img7} producttext={"Commerce"}/></Link>
<Link to='/bar8' className='leftsidebarlistlink'><ProductBar imgofproductbar={img8} producttext={"Data Cloud"}/></Link>
<Link to='/bar9' className='leftsidebarlistlink'><ProductBar imgofproductbar={img9} producttext={"Tableau"}/></Link>
<Link to='/bar10' className='leftsidebarlistlink'><ProductBar imgofproductbar={img10} producttext={"Mulesoft"}/></Link>
<Link to='/bar11' className='leftsidebarlistlink'><ProductBar imgofproductbar={img11} producttext={"Slack"}/></Link>
<Link to='/bar12' className='leftsidebarlistlink'><ProductBar imgofproductbar={img12} producttext={"Net Zero"}/></Link>
<Link to='/bar13' className='leftsidebarlistlink'><ProductBar imgofproductbar={img13} producttext={"Parter Apps & Experts"}/></Link>
<Link to='/bar14' className='leftsidebarlistlink'><ProductBar imgofproductbar={img14} producttext={"Customer Success"}/> </Link>

</div>
       </div>

     
    
        )
}