import SideBarLeft from "../SideBarLeft/SideBarLeft"
import SideBarRight from "../SideBarRight/SideBarRight"
export default function SideBar(){
    return(
        <div className="Sidebar">
            <SideBarLeft/>
            <SideBarRight/>
            
        </div>
    )
}