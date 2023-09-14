import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <>
    <Navbar />
    <Home/>
   </>
);






