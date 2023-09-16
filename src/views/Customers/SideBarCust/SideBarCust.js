
import LearningBar from "../../../components/LearningBar/LearningBar"


export default function SideBarCust(){
    return(
        <div className="leftsidebar">
        <div className='slogen' >Company</div>
        
     
         <div className='leftsidebarlist'>  
      <LearningBar learnbrtext={"About Salesforce"} />
      <LearningBar learnbrtext={"Our Values"} />
      <LearningBar learnbrtext={"Our Impact"} />
      <LearningBar learnbrtext={"Careers"} />
      <LearningBar learnbrtext={"News"} />
      <LearningBar learnbrtext={"More Salesforce Brands"} />
     

      


         </div>
         </div>
    )
}