import './SectionTwo.css'

import Button from '../../components/Button/Button'
import ProductCard from "../../components/ProductCard/ProductCard"
// -------- Import Images --------- 
import small from './smallBusiness.webp'
import seles from './salesCloud.webp'
import sercice from './serviceCloud.webp'
import marketing from './marketingCloud.webp'
import bgImage from './productBG.webp'

export default function SectionTwo() {
    return (
        <>
        <div >
            <div className="container-md seconeheadcon">
                <div className="row-md sectiononerow ">
                    <div className="col section-heading">
                       <h1 className='heading slogenofsectionone'> Learn what Salesforce products can do for you.</h1>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row sectiononecards">
                    <div className="col-md">
                        <ProductCard ImgURL={small} Title={'Small Businss'} conteint={'Sales, service, and email outreach tools in a single app.'} link={'Try for free'} />
                    </div>
                    <div className="col-md">
                        <ProductCard ImgURL={seles} Title={'Sales Cloud'} conteint={'Close more deals and speed up throgh growth with the #1 CRM.'} link={'watch demo'} />
                    </div>
                    <div className="col-md">
                        <ProductCard ImgURL={sercice} conteint={'Make customers happy faster and build loyalty with Service Cloud.'} Title={'Service Cloud'} link={'Watch demo'} />
                    </div>
                    <div className="col-md">
                        <ProductCard ImgURL={marketing} Title={'Marketing Cloud'} conteint={'Build customer relationships for life with data-first digital marketing.'} link={'Watch demo'} />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container-md ">
                <div className="row-md ">
                    <div className="col-md sectiontowbtn">
                       
                   
                        <Button text={"View all our product"}/>
                    </div>
                </div>
            </div>
            <img src={bgImage} alt='img' width='100%' className='bg-image' />

        </div>

        </>
    )
}