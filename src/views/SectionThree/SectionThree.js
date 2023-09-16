import CompanyLogoCard from '../../components/CompanyLogoCard/CompanyLogoCard'
import Button,{DarkButton} from './../../components/Button/Button'
import backgroundimg from './backgroundimg.webp'
import balaji from './balaji.webp'
import flame from './flame.webp'
import genpact from './genpact.webp'
import godrejboyce from './godrejboyce.webp'
import mahindra from './mahindra.webp'
import pepe from './pepe.webp'
import razorpay from './razorpay.webp'
import secutech from './secutech.webp'
import './SectionThree.css'

export default function SectionThree() {
    return (
        <div>
            <h2 className='SectionSevenSlogen'>We bring companies and customers together</h2><br/>
            <p className='sales-text'>Salesforce is the world’s most trusted customer relationship management (CRM)<br/> platform. We help your marketing, sales, commerce, service and IT teams work as <br/>one from anywhere — so you can keep your customers happy everywhere.</p><br/>

            <div className='grpbtn'>
                <div>
            <DarkButton text="Start Free Trial" color={"BlueButton"}/> 
            </div>
         <div className='buttonRight'>
         <Button text={"Watch Demo"}/>
         </div></div>
         <br/><br/>
            <h2 className='SectionSevenSlogen'>Over 150,000 companies, both big and small, are<br />growing their business with Salesforce.</h2><br/><br/>
<div className='viewbtn'>
<Button text="Viwe all customers" className="customer-btn" />
</div>
<br/><br/>     
 <div className='companycardofsectionthree'>
                <CompanyLogoCard img={balaji} />
                <CompanyLogoCard img={flame} />
                <CompanyLogoCard img={genpact} />
                <CompanyLogoCard img={godrejboyce} />
                <CompanyLogoCard img={mahindra} />
            </div>
            <div className='companycard'>
                <CompanyLogoCard img={pepe} />
                <CompanyLogoCard img={razorpay} />
                <CompanyLogoCard img={secutech} />
            </div>
            <div>
                <div className='background-image'>
                    <img src={backgroundimg} className="back-image" />
                </div>
                
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='sectionthreesvg'><path fill="#ffff" fill-opacity="1" d="M0,96L80,133.3C160,171,320,245,480,277.3C640,309,800,299,960,256C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      

            </div>
        </div>

    )
}
