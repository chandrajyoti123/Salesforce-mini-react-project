
import './SectionSix.css'
import backgroundimage from './backgroundimage.webp'
import birds from './birds.webp'
import butterfly from './butterfly.webp'
import leaf from './leaf.webp'
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard'

export default function SectionSix(){
   return(
      <div>
      <div className='main-container'>
         <h1 className='tech-text SectionSevenSlogen'>Our technology helps people create better jobs,<br/> lives, companies, and communities.</h1>
   
     <div className='sectionsixcards'>
     <TechnologyCard imgoftechnolgy={leaf} textoftechnology={"Technology given for free or discounted"}/>
      <TechnologyCard imgoftechnolgy={butterfly} textoftechnology={"Fortune 100 Best Companies to Work For 2023<br/> (15 years in a row)"} />
      <TechnologyCard imgoftechnolgy={birds} textoftechnology={" fortun   World's fortun Most Admired Companies 2023"}/>
     </div>

      <div className='background-image'>
      <img src={backgroundimage} className="back-image"/>
      
      </div>

      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='sectionsixsvg'><path fill="#fff" fill-opacity="1" d="M0,96L80,133.3C160,171,320,245,480,277.3C640,309,800,299,960,256C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
      
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='sectionsixsvg'><path fill="#fff" fill-opacity="1" d="M0,288L1440,192L1440,320L0,320Z"></path></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='sectionsixsvg'><path fill="#fff" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,256C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='sectionsixsvg'><path fill="#fff" fill-opacity="1" d="M0,32L80,74.7C160,117,320,203,480,245.3C640,288,800,288,960,277.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
      </div>

    
     
   )
}



