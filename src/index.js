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
 ]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <>
        <RouterProvider router={router} />
   </>
);






