import './Button.css';

export default function Button({text}){
    return(
    <button type="button" className="lineButton">{text}</button>
    );
}

export function DarkButton({text , color}){
    return(
        <button type="button" className={color}>{text}</button>
        );
}