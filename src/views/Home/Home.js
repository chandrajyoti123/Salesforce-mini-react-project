import Navbar from "../../components/Navbar/Navbar"
import SectionOne from "../SectionOne/SectionOne"
import SectionTwo from "../SectionTwo/SectionTwo"
import SectionThree from "../SectionThree/SectionThree"
import SectionFour from "../SectionFour/SectionFour"
import SectionFive from "../SectionFive/SectionFive"
import SectionSix from "../SectionSix/SectionSix"
import SectionSeven from "../SectionSeven/SectionSeven"
import Footer from "../../components/Footer/Footer"
import './Home.css'






export default function Home(){
    return(
        <div className="home">
      <Navbar/>
      <div className="sidebar">
        <div className="side">

        </div>
      </div>
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
       <SectionFive/>
       <SectionSix/>
       <SectionSeven/>
       <Footer/>
       </div>


    )
}
