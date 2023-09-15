import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home/Home';
import SideBar from './components/SideBar/SideBar';

// import {
//    createBrowserRouter,
//    RouterProvider,
//  } from "react-router-dom";
//  const router = createBrowserRouter([
//    {
//      path: "/",
//      element: <Home/>,
//    },
//    {
//      path: "/about",
//      element: <About/>,
//    },
//    {
//      path: "/contact",
//      element:<Contact/>,
//    },
//  ]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <>
    <Home/>
   </>
);






