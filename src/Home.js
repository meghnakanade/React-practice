import React from 'react';
import './App.css';
import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from 'semantic-ui-react';

const left=<img src="left.png" className="arrow"></img>
const right=<img src="right.png" className="arrow"></img>

function Home() {
  return (
    <div>
      <h1 className="heading">HOME</h1>
      <br/>

      <h3>BEST SELLING GALLERY</h3>
      <br/>
      <div className='carousel-box'>
      <Carousel show={3.5} slide={1} transition={0.5} leftArrow={left} rightArrow={right} className='carousel'>
      <div> <img src="dummy1.jfif" className='best-sells'/></div>
        <div> <img src="dummy1.jfif" className='best-sells'></img></div>
        <div> <img src="dummy1.jfif" className='best-sells'/></div>
        <div> <img src="dummy1.jfif" className='best-sells'></img></div>
      </Carousel>
      </div>

      <br/>
      <br/>
      <br/>
      <h3>NEW RELEASES</h3>
      <br/>
      <div className='carousel-box'>
      <Carousel show={3.5} slide={1} transition={0.5} leftArrow={left} rightArrow={right} className='carousel'>
      <div> <img src="dummy3.jfif" className='best-sells'/></div>
        <div> <img src="dummy3.jfif" className='best-sells'></img></div>
        <div> <img src="dummy4.jfif" className='best-sells'/></div>
        <div> <img src="dummy4.jfif" className='best-sells'></img></div>
      </Carousel>
      </div>
    </div>


  );
}

export default Home;
/*
      <img src="dummy1.jfif" className='best-sells'></img>
      <img src="dummy4.jfif" className='best-sells'></img>
      <img src="dummy3.jfif" className='best-sells'></img>
*/
/*
<Item><img src="dummy1.jfif" ></img></Item>
        <Item><img src="dummy4.jfif" ></img></Item>
        <Item><img src="dummy3.jfif" ></img></Item>
        <Item><img src="dummy4.jfif" ></img></Item>
        <Item><img src="dummy3.jfif" ></img></Item>
        <Item><img src="dummy4.jfif" ></img></Item>
        <Item><img src="dummy3.jfif" ></img></Item>
*/