import Button, {DarkButton} from '../../components/Button/Button'
import backgroundimage from './backgroundimage2.webp'
import './SectionOne.css'

export default function SectionOne(){
    return(
        
        <div className='sectionOne'>
           <div className='sectionOneOfOne'>
           <div className='slogen'>AI + Data + CRM = more <br/> sales and happier <br/> customers. </div>
          <div className=' text sectiononetext'>Discover trusted AI that helps you connect with your customers in <br/> a whole new way.</div>
          <div className='buttonGroup'>
            <div className='buttonleft'><DarkButton text="Start Free Trial" color={"BlueButton"}/> </div>
         <div className='buttonRight'>
         <Button text={"Watch Demo"}/>
         </div>
         </div>
           </div>
           <div className=' sectionOneOfTwo'>
            <img className='sectionOneImage' src={backgroundimage}/>
           </div>
        </div>
        
        
       
    )
}