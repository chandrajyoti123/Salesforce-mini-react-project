
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGreaterThan} from "@fortawesome/free-solid-svg-icons";



export default function LearningBar({learnbrtext}){
    return(
        <div className="ProductBar">
          <div className="ProductBarbox">
          
          <span className='ProductBartext'>{learnbrtext}</span>
          <span><FontAwesomeIcon icon={faGreaterThan} /> </span>
          </div>
        </div>
    )
}
