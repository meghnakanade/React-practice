import React from 'react';
import './App.css';
import Contact from './Contact';

const handleDeets = (event_)=>
{

  event_.preventDefault();
}

function Shop() {
  return (
    <div>
      <div id="items">
      <div className='item'>
        <img src='dummy4.jfif' className='item-img' alt='some product'></img>
        <br/>

        <label>
        <input type='checkbox' name='Add to cart' className='check'/> 
        Add to cart
        </label>
        <button className='details' onClick={handleDeets}>Details</button>
      </div>
      <div className='item'>
        <img src='dummy4.jfif' className='item-img' alt='some product'></img>
        <br/>

        <label>
        <input type='checkbox' name='Add to cart' className='check'/> 
        Add to cart
        </label>
        <button className='details' onClick={handleDeets}>Details</button>
      </div>
      <div className='item'>
        <img src='dummy4.jfif' className='item-img' alt='some product'></img>
        <br/>

        <label>
        <input type='checkbox' name='Add to cart' className='check'/> 
        Add to cart
        </label>
        <button className='details' onClick={handleDeets}>Details</button>
      </div>
    </div>
    </div>
  );
}

export default Shop;
/*
<div>
      <div className='item'>
        <img src='dummy4.jfif' className='item-img' alt='some product'>Some Product</img>
      </div>
    </div>
*/
/*
<div id="items">
      <div className='item'>
        <img src='dummy4.jfif' className='item-img' alt='some product'></img>
        <br/>

        <label>
        <input type='checkbox' name='Add to cart' className='check'/> 
        Add to cart
        </label>
        <button className='details' onClick={handleDeets}>Details</button>
      </div>
      <div className='item'>
        <img src='dummy4.jfif' className='item-img' alt='some product'></img>
        <br/>

        <label>
        <input type='checkbox' name='Add to cart' className='check'/> 
        Add to cart
        </label>
        <button className='details' onClick={handleDeets}>Details</button>
      </div>
      <div className='item'>
        <img src='dummy4.jfif' className='item-img' alt='some product'></img>
        <br/>

        <label>
        <input type='checkbox' name='Add to cart' className='check'/> 
        Add to cart
        </label>
        <button className='details' onClick={handleDeets}>Details</button>
      </div>
    </div>
*/