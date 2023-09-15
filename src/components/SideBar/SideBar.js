import "./SideBar.css"
import ProductCard from "../ProductCard/ProductCard"
export default function SideBar(){
    return(
      <div className="sidebar">
         <div className="leftsidebar">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

       </div>
       <div className="rightsidebar">
       <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        
       </div>
      </div>
        )
}