import './Button.css'

export default function Button({text}){
    return(
    <button type="button" className="linebutton">{text}</button>
    );
}