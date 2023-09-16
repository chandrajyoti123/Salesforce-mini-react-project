import ProductBar from "../../../components/ProductBar/ProductBar"


import imgofcompany1 from './indusimg1.svg'
import imgofcompany2 from './indusimg2.svg'


export default function SideBarCompany(){
    return(
        <div className="leftsidebar">
        <div className='slogen' >Customer</div>
        
     
         <div className='leftsidebarlist'>  
       <ProductBar imgofproductbar={imgofcompany1} producttext={"Customer Stories"}/>
       <ProductBar imgofproductbar={imgofcompany2} producttext={"Trailblazer Stories"}/>
      


         </div>
         </div>
    )
}