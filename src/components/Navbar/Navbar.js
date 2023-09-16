import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faGlobe,faUser} from "@fortawesome/free-solid-svg-icons";

import { DarkButton } from "../Button/Button";






import './Navbar.css'
import Button from "../Button/Button";
import navlogo from './logo-salesforce1.svg'





export default function Navbar(){
    const path=window.location.pathname;
    return(
        <div className="header">
            <span className="logo">
           <Link to="/">
        <img src={navlogo}  className="logoSvg"/>
           </Link>

            </span>
        
         <ul className="navbarList">
                <li> <Link to="/product" className={path==='/product'?'active':''}>Product</Link></li>
                <li> <Link to="/industries" className={path==='/industries'?'active':''}>Industries</Link> </li>
                <li> <Link to="/company" className={path==='/company'?'active':''}>Customer</Link></li>
                <li> <Link to="/learning" className={path==='/learning'?'active':''}>Learning</Link> </li>
                <li> <Link to="/support" className={path==='/support'?'active':''}>Support</Link> </li>
                <li> <Link to="/customers" className={path==='/customers'?'active':''}>Company</Link> </li>
                <li> <Link to="/salesforce" className={path==='/salesforce'?'active':''}>Salesforce</Link></li>
                
            </ul>
            <div className="leftNavList">

              <span className="contact"> 
                 <div>Contact us</div>
                <div>1800-420-7332</div>
              </span>
           
               <span className="iconHover"> <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
               <span className="iconHover"> <FontAwesomeIcon icon={faGlobe} /></span>
              <Link to="/userlogin"> <span className="userLogin"><FontAwesomeIcon icon={faUser} /> login</span> </Link>
               <Link to="tryforfree"><DarkButton text="Try for free" color={"GreenButton"}/></Link>
            
            
            </div>
            
        </div>
    )
}