import ProductBar from "../../../components/ProductBar/ProductBar"


import imgofcompany1 from './indusimg1.svg'
import imgofcompany2 from './indusimg2.svg'
import LearningBar from "../../../components/LearningBar/LearningBar"


export default function SideBarCompany(){
    return(
        <div className="leftsidebar">
        <div className='slogen' >Customer</div>
        
     
         <div className='leftsidebarlist'>  
       
       <LearningBar learnbrtext={"Customer Stories"}/>
       <LearningBar learnbrtext={"Trailblazer Stories"}/>

      


         </div>
         </div>
    )
}