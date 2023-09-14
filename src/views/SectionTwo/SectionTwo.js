import { DarkButton } from "../../components/Button/Button"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
// -------- Import Images --------- 
import small from './smallBusiness.webp'
import seles from './salesCloud.webp'
import sercice from './serviceCloud.webp'
import marketing from './marketingCloud.webp'

export default function SectionTwo() {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <ProductCard ImgURL={small} Title={'Small Businss'} conteint={'Sales, service, and email outreach tools in a single app.'} link={'Try for free'}  />
                    </div>
                    <div className="col">
                        <ProductCard ImgURL={seles } Title={'Sales Cloud'} conteint={'Close more deals and speed up throgh growth with the #1 CRM.'} link={'watcj demo'}/>
                    </div>
                    <div className="col">
                        <ProductCard ImgURL={sercice} conteint={'Make customers happy faster and build loyalty with Service Cloud.'} Title={'Service Cloud'} link={'Watch demo'}/>
                    </div>
                    <div className="col">
                        <ProductCard ImgURL={marketing} Title={'Marketing Cloud'} conteint={'Build customer relationships for life with data-first digital marketing.'} link={'Watch demo'} />
                    </div>
                </div>
            </div>


            <Button text="Demo Viwe" />
            <br />
            <br />
            <DarkButton text="Demo Viwe" color={"GreenButton"} />
        </>
    )
}