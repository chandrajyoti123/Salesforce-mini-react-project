
import './BusinessCard.css'
export default function BusinessCard({img,text}){
    return(
        <div className="businesscard">
           <img src={img} className="businessCardImage"/>
           <div className="sectionFiveText">{text}</div>
        </div>
    )
}