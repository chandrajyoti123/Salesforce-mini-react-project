import CompanyLogoCard from '../../components/CompanyLogoCard/CompanyLogoCard'
import Button from './../../components/Button/Button'
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

            <Button text="Viwe all customers" className="customer-btn" /><br/>

            <h2 className='SectionSevenSlogen'>Over 150,000 companies, both big and small, are<br />growing their business with Salesforce.</h2>

            <Button text="Viwe all customers" className="customer-btn" />

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
            </div>
        </div>

    )
}
