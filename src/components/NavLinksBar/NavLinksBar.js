import './NavLinksBar.css'
import arrow from './right-arrow.png'
export default function NavLinsBar({navlinktext}){
   
    return(
        <div className="navbarlink">
            <span className='navbarlinktext'>{navlinktext}</span>
            <img src={arrow} className='arrowimg' />
        </div>


    )
}