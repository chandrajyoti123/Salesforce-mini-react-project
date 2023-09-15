
import './SectionSix.css'
import backgroundimage from './backgroundimage.webp'
import birds from './birds.webp'
import butterfly from './butterfly.webp'
import leaf from './leaf.webp'

export default function SectionSix(){
   return(
      <div className='main-container'>
         <h1 className='tech-text'>Our technology helps people create better jobs,<br/> lives, companies, and communities.</h1>
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
    
     
   )
}



