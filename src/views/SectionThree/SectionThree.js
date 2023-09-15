import CompanyLogoCard from '../../components/CompanyLogoCard/CompanyLogoCard'


import balaji from './balaji.webp'
import flame from './flame.webp'
import genpact from './genpact.webp'
import godrejboyce from './godrejboyce.webp'
import mahindra from './mahindra.webp'
import pepe from './pepe.webp'
import razorpay from './razorpay.webp'
import secutech from './secutech.webp'
import './SectionThree.css'
 
export default function SectionThree(){
    return(
        <div>
             <h2 className='companytext'>Over 150,000 companies, both big and small, are<br/> growing their business with Salesforce.</h2>
        <div className='companycardofsectionthree'>
            <CompanyLogoCard img={balaji}/>
            <CompanyLogoCard img={flame}/>
            <CompanyLogoCard img={genpact}/>
    <CompanyLogoCard img={godrejboyce}/>
            <CompanyLogoCard img={mahindra}/>
            </div>
            <div className='companycard'>
            <CompanyLogoCard img={pepe}/>
            <CompanyLogoCard img={razorpay}/>
            <CompanyLogoCard img={secutech}/>
            </div>
        
        </div>  
   
    )
}