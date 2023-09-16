
import LearningBar from "../../../components/LearningBar/LearningBar"


export default function SideBarSup(){
    return(
        <div className="leftsidebar">
        <div className='slogen' >Support</div>
        
     
         <div className='leftsidebarlist'>  
      <LearningBar learnbrtext={"Help & Documentation"} />
      <LearningBar learnbrtext={"Communities"} />
      <LearningBar learnbrtext={"Service & Plans"} />
      <LearningBar learnbrtext={"Your Account"} />
     

      


         </div>
         </div>
    )
}