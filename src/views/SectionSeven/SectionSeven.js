import './SectionSeven.css'
import Button,{DarkButton} from '../../components/Button/Button'
export default function SectionSeven(){
    return(
       <div className="sectionSeven">
        <div className='SectionSevenSlogen'>Questions? We'll put you on the right <br/> path. </div>
        <div className='SectionSeventext'>
            Ask about Salesforce products, pricing, implementation, or anything else. <br/> Our highly trained reps are standing by, ready to help.
        </div>
        <div className='sectionSevenlist'>
           <div className='SectionSevenBtn'> <DarkButton text={"Contact Us"} color={"BlueButton"}/> </div>
           <a href='#' className=''>edition & Pricing</a>
        </div>

       </div>
    )
}