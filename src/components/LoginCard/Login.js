import './Login.css'
import { DarkButton } from './../Button/Button'

function InputBox({ name }) {
    return (
        <>
            <label for={name} className='bg-white'>{name}</label>
            <input type="text" id={name} className='inputBox' />
        </>
    )
}

export default function Login() {
    return (
        
        <div className='loginCard'>
            <div className='flex-box'>
                <InputBox name={'Username'} />
                <InputBox name={'Password'} />
                <DarkButton color={'BlueButton'} text={'Login'} />
                <div className='checkbox bg-white'>
                    <input type="checkbox" className='checkbox2'/> <label for='' className='text4'>Remember me</label>
                </div>
                <hr/>
                <div className='bg-white'>
                    <a href='#' className='forget'>Forgot your password </a>

                    <a href='#' className='forget'>Use costem domain </a>
                </div>
            </div>
           
        </div>
        
    )
}