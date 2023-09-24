import './UserLogin.css'
import logo from './salesforce-logo.png'
import Button from '../../components/Button/Button'

import Login from "../../components/LoginCard/Login"
import Bottom from '../../components/Bottom/Bottom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faGlobe,faUser,faBars} from "@fortawesome/free-solid-svg-icons";

export default function UserLogin() {
    return (
        <>
            <div className="login-cantainer">
               
                <Link to='/'>
                <img src={logo} className='logoOfSelforce' />

                </Link>
            
               
                <Login />
                <div className='button-div'>
                    <p className='text'>Not a customer?</p>
               <Button text={`try for free`}/>
              
                </div>
           
            </div><br/>
            <Bottom/>
          
        </>
    )
}