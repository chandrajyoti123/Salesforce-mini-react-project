
import './SideBarOfIndus.css'
import ProductBar from '../../components/ProductBar/ProductBar'
import { Link } from 'react-router-dom'
import indusimg1 from './indusimg1.svg'
import indusimg2 from './indusimg2.svg'
import indusimg3 from './indusimg3.svg'
import indusimg4 from './indusimg4.svg'
import indusimg5 from './indusimg5.svg'
import indusimg6 from './indusimg6.svg'
import indusimg7 from './indusimg7.svg'
import indusimg8 from './indusimg8.svg'
import indusimg9 from './indusimg9.svg'
import indusimg10 from './indusimg10.svg'
import indusimg11 from './indusimg11.svg'
import indusimg12 from './indusimg12.svg'



export default function SideBarOfIndus(){
    return(
        <div className="leftsidebar">
        <div className='slogen' >Industries</div>
        
     
         <div className='leftsidebarlist'>  
       <ProductBar imgofproductbar={indusimg1} producttext={"Automotive"}/>
       <ProductBar imgofproductbar={indusimg2} producttext={"Communication"}/>
       <ProductBar imgofproductbar={indusimg3} producttext={"Consumer Goods"}/>
       <ProductBar imgofproductbar={indusimg4} producttext={"Education"}/>
       <ProductBar imgofproductbar={indusimg5} producttext={"Energy & Utilities"}/>
       <ProductBar imgofproductbar={indusimg6} producttext={"Financial Services"}/>
       <ProductBar imgofproductbar={indusimg7} producttext={"Healthcare & Life Sciences"}/>
       <ProductBar imgofproductbar={indusimg8} producttext={"Manufacturing"}/>
       <ProductBar imgofproductbar={indusimg9} producttext={"Media"}/>
       <ProductBar imgofproductbar={indusimg10} producttext={"Nonprofit"}/>
       <ProductBar imgofproductbar={indusimg11} producttext={"Public Sector"}/>
       <ProductBar imgofproductbar={indusimg12} producttext={"Retail"}/>


         </div>
         </div>
    )
}