import './Login.css'
import { DarkButton } from './../Button/Button'

function InputBox({ name }) {
    return (
        <>
            <label for={name}>{name}</label>
            <input type="text" id={name} className='inputBox' />
        </>
    )
}

export default function Login() {
    return (
            <div className='loginCard'>
                <InputBox name={'Username'} />
                <InputBox name={'Password'} />
                <DarkButton color={'BlueButton'} text={'Login'} />
                <div className='checkbox'>
                <input type="checkbox"  /> <label for=''>Remember me</label>
                </div>
            </div>
    )
}