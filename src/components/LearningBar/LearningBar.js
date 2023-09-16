
import './LearningBar.css'
import arrow from "./right-arrow.png"



export default function LearningBar({learnbrtext}){
    return(
        <div className="ProductBar learningBar">
          <div className="ProductBarbox learningbarbox">
          
          <span className='ProductBartext learningbartext'>{learnbrtext}</span>
          <span><img src={arrow} className="rightarrow"/></span>
          </div>
        </div>
    )
}
