import './NavbarContactInfo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faGlobe,faUser,faBars} from "@fortawesome/free-solid-svg-icons";
import Arrow from  './right-arrow.png'
export default function NavbarContactInfo({icon,text}){
    return(
        <div className="navbarcontactinfo">
            <div><span className='navbaricon'>{icon}</span><span className='navbartext'>{text}</span></div>
            <img src={Arrow} className='arrowofnavbar'/>
       

        </div>
    )

}