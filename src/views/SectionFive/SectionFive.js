import BusinessCard from "../../components/BusinessCard/BusinessCard"
import img1 from './img1.webp'
import img2 from './img2.webp'
import img3 from './img3.jpg'
import img4 from './img4.webp'
import './SectionFive.css'
export default function SectionFive(){
    return(
    <div>
        <div className="SectionSevenSlogen sectionfiveslogen">How can we help grow your business? </div>
        <div className="sectionFivelist">
          <BusinessCard img={img1} text={"Sell Faster"}/>
      <BusinessCard img={img2} text={"Close More Deals"}/>
      <BusinessCard img={img3} text={"Scale Service"}/>
      <BusinessCard img={img4} text={"Build Customer Service"}/>
    </div>
    </div>
    )
}