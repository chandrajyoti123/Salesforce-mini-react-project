import './ProductBar.css'
import img1 from './img1.svg'

export default function ProductBar({imgofproductbar,producttext}){
    return(
        <div className="ProductBar">
          <div className="ProductBarbox">
          <span className='ProductBaricon'><img src={imgofproductbar} className="imgofproductbar"/></span>
          <span className='ProductBartext'>{producttext}</span>
          </div>
        </div>
    )
}
