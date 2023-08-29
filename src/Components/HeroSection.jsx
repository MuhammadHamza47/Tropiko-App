import React from 'react';
import slide from '../Assets/slide-img.png'

function HeroSection() {
  return (
    <div className="div1">
      <div className="side-left" id="Home">
        <h1>Welcome to <br />Our Fruits Shop</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam exercitationem et ex, ab vel nisi eum
          dolore dolorum, ipsam quos ea sint. Eos quod accusamus qui eum soluta inventore. Quam?</p>
        <a href="/"><button id="btn2-1" type="submit">SHOP NOW</button></a>
        <a href="/"><button id="btn2-2" type="submit">CONTACT US</button></a>
      </div>
      <div className="side-right">
        <img src={slide} alt="" id="img2" width="540px" />
      </div>
    </div>
  );
}

export default HeroSection;
