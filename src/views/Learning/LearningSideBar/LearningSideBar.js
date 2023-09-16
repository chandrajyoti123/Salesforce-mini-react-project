import LearningBar from "../../../components/LearningBar/LearningBar"


export default function LearningSideBar(){
    return(
        <div className="leftsidebar">
        <div className='slogen' >Learning</div>
        
     
         <div className='leftsidebarlist'>  
      <LearningBar learnbrtext={"Learning on Trailhead"} />
      <LearningBar learnbrtext={"Customer Stories"} />
      <LearningBar learnbrtext={"Events & Experiences"} />
      <LearningBar learnbrtext={"By Topic"} />
      <LearningBar learnbrtext={"By Content Type"} />
      <LearningBar learnbrtext={"Blogs"} />
      <LearningBar learnbrtext={"success Center"} />

      


         </div>
         </div>
    )
}