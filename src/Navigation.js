import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import {SocialIcon} from 'react-social-icons';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery'
import Shop from './Shop';
function Navigation(){
    return(
        
        <ul className='nav-bar'>
        <Link to="/"><li>Home</li> </Link>
        <Link to="/store"><li>Shop</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/gallery"><li>Gallery</li></Link>
        <Link to="/contact"><li>Contact Us</li></Link>  
        <Link to="www.twitter.com" className='social' target="_blank" rel="noopener noreferrer" ><SocialIcon url="https://twitter.com/kanademeghna" bgColor='#171515' fgColor='blue'/></Link>
        </ul>
  


    );
}
/*function Home(){
    return(
<div>
    <h1>hello world</h1>
</div>
    );
}*/

export default Navigation;

/*
     <Link to="/"  >Home </Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>       
*/
/*
  <Router>
            <ul className='nav-bar'>
            
            <Link to="/"  ><li>Home</li> </Link>
            <Link to="/shop"><li>Shop</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>   
            
            </ul>
            </Router>
*/