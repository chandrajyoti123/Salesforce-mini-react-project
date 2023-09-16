import './UserLogin.css'
import logo from './salesforce-logo.png'
import Button from '../../components/Button/Button'

import Login from "../../components/LoginCard/Login"

export default function UserLogin() {
    return (
        <>
            <div className="login-cantainer">
                <img src={logo} className='logo' />
                <Login />
                <div className='button-div'>
                    <p className='text'>Not a customer?</p>
                <Button text={'Try for Free'}/>
                </div>
            </div>
        </>
    )
}