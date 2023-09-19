import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faGlobe,faUser,faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import { DarkButton } from "../../components/Button/Button";

import NavLinksBar from "../../components/NavLinksBar/NavLinksBar";









import navlogo from './logo-salesforce1.svg'
import './NavLinks.css'

export default function Navlinks(){
    return(
        <div>
        <div className="phoneheader">
        <Link to="/"><span  className="navmenu"><FontAwesomeIcon icon={faXmark} /></span></Link>
    
        <Link to={"/"}><img src={navlogo} className="navlogophone"/></Link>
        <span className="iconHover"> <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        <Link to="/userlogin"> <span className="iconHover"><FontAwesomeIcon icon={faUser} /></span> </Link>

        <Link to="/tryforfree"><DarkButton text="Try for free" color={"GreenButton"}/></Link>

         </div>
         <div className="navlinksbarlist">

<Link className="Navlinks" to="/product"><NavLinksBar navlinktext={"Products"}/></Link>
<Link className="Navlinks" to="/industries"><NavLinksBar navlinktext={"Industries"}/></Link>
<Link className="Navlinks" to="/company"><NavLinksBar navlinktext={"Cutomers"}/></Link>
<Link className="Navlinks" to="/learning"><NavLinksBar navlinktext={"Learning"}/></Link>
<Link className="Navlinks" to="/support"><NavLinksBar navlinktext={"Supports"}/></Link>
<Link className="Navlinks" to="/customers"><NavLinksBar navlinktext={"Company"}/></Link>
<Link className="Navlinks" to="/salesforce"><NavLinksBar navlinktext={"Salesforce+"}/></Link>
</div>


        
        </div>
    )
}