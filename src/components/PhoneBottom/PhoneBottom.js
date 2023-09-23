import './PhoneBottom.css'
import bcimg from './secontimg.webp'
import { DarkButton } from '../Button/Button'
export default function PhoneBottom({head,btntext}){
    return(
        <div className="phonebottomcon">
              <div className='phonebottomcontent'>
              <div className='hedingofphonebottom'>{head}</div>
              <div className='btnofphonebottom'><DarkButton text={btntext} color={"BlueButton"}/></div>
              </div>
            <img src={bcimg} className='bcimgofphonebottom'/>
           
              
                
          
        
        </div>
    )

}