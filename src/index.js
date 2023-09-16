import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home/Home';
import SideBar from './components/SideBar/SideBar';
import Product from './views/Product/Product';
import Industries from './views/Industries/Industries';
import Customers from './views/Customers/Customers';
import Learning from './views/Learning/Learning';
import Support from './views/Supports/Supports';
import Company from './views/Company/Company';
import Salesforce from './views/SalesForce/SalesForce';
import SideBarRight from './components/SideBarRight/SideBarRight';
import TryForFree from './views/TryForFree/TryForFree';
import img1 from "./img/img1.svg"
import img2 from "./img/img2.svg"
import img3 from "./img/img3.svg"
import img4 from "./img/img4.svg"
import img5 from "./img/img5.svg"
import img6 from "./img/img6.svg"
import img7 from "./img/img7.svg"
import img8 from "./img/img8.svg"
import img9 from "./img/img9.svg"
import img10 from "./img/img10.svg"
import img11 from "./img/img11.svg"
import img12 from "./img/img12.svg"
import img13 from "./img/img13.svg"
import img14 from "./img/img14.svg"
import UserLogin from './views/UserLogin/UserLogin';

import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home/>,
   },
   {
     path: "/product",
     element: <Product/>,
   },
   {
     path: "/industries",
     element:<Industries/>,
   },
   {
     path: "/customers",
     element:<Customers/>,
   },
   {
     path: "/learning",
     element:<Learning/>,
   },
   {
     path: "/support",
     element:<Support/>,
   },
   {
     path: "/company",
     element:<Company/>,
   },
   {
     path: "/salesforce",
     element:<Salesforce/>,
   },
   {
     path: "/userlogin",
     element:<UserLogin/>,
   },
   {
     path: "/tryforfree",
     element:<TryForFree/>,
   },
   {
     path: "/bar1",
     element:<Product imgofsidebar={img1} slogen={"Customer 360"}/>,
   },
   {
     path: "/bar2",
     element:<Product imgofsidebar={img2} slogen={"Small Business"}/>,
   },
   {
     path: "/bar3",
     element:<Product imgofsidebar={img3} slogen={"Artificial Intellingece"}/>,
   },
   {
     path: "/bar4",
     element:<Product imgofsidebar={img4} slogen={"Sales"}/>,
   },
   {
     path: "/bar5",
     element:<Product imgofsidebar={img5} slogen={"Service"}/>,
   },
   {
     path: "/bar6",
     element:<Product imgofsidebar={img6} slogen={"Marketing"}/>,
   },
   {
     path: "/bar7",
     element:<Product imgofsidebar={img7} slogen={"Commerce"}/>,
   },
   {
     path: "/bar8",
     element:<Product imgofsidebar={img8} slogen={"Data Cloud "}/>,
   },
   {
     path: "/bar9",
     element:<Product imgofsidebar={img9} slogen={"Tabeau"}/>,
   },
   {
     path: "/bar10",
     element:<Product imgofsidebar={img10} slogen={"Mulesoft "}/>,
   },
   {
     path: "/bar11",
     element:<Product imgofsidebar={img11} slogen={"Slack"}/>,
   },
   {
     path: "/bar12",
     element:<Product imgofsidebar={img12} slogen={"Net zero "}/>,
   },
   {
     path: "/bar13",
     element:<Product imgofsidebar={img13} slogen={"parter Apps & Experts"}/>,
   },
   {
     path: "/bar14",
     element:<Product imgofsidebar={img14} slogen={"Customer Succes"}/>,
   },
 ]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <>
        <RouterProvider router={router} />
   </>
);






