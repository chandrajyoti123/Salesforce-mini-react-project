
import './SectionSix.css'
import backgroundimage from './backgroundimage.webp'
import birds from './birds.webp'
import butterfly from './butterfly.webp'
import leaf from './leaf.webp'

export default function SectionSix(){
   return(
      <div>
      <div className='main-container'>
         <h1 className='tech-text SectionSevenSlogen'>Our technology helps people create better jobs,<br/> lives, companies, and communities.</h1>
      <div className='container'>
     <img src={leaf} className="image"/>
      <img src={butterfly} className="image"/>
      <img src={birds} className="image"/>
      </div>
<div className='container'>
<span className='text'>Technology given for free or discounted</span>
<span className='text'>Fortune 100 Best Companies to Work For 2023<br/> (15 years in a row)</span>
<span className='text'>Fortune World's Most Admired Companies 2023</span>
</div>
      <div className='background-image'>
      <img src={backgroundimage} className="back-image"/>
      
      </div>

      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='sectionsixsvg'><path fill="#fff" fill-opacity="1" d="M0,96L80,133.3C160,171,320,245,480,277.3C640,309,800,299,960,256C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
      </div>

    
     
   )
}



