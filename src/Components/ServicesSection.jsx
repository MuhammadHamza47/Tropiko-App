import React from 'react';
// import Service from './Service'; // Import the Service component
import orangeImage from '../Assets/card-item-1.png';
import grapesImage from '../Assets/card-item-2.png';
import guavaImage from '../Assets/card-item-3.png';

function ServicesSection() {
 

  return (
    <>
    <div id="container1">
        <div class="services" id="orange">
            <img src={orangeImage} alt=""/>
            <h3>Oranges</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate rem voluptas, deleniti magnam
                dignissimos iure eaque nisi dolorem? Reprehenderit, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Suscipit ipsam molestiae assumenda repellendus laborum minus deserunt placeat expedita facilis
                velit!</p>

        </div>
        <div class="services" id="grapes">
            <img src={grapesImage} alt=""/>
            <h3>Grapes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto facilis, corporis repellat
                dolore earum qui in distinctio neque ipsam?lorem20 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Suscipit ipsam molestiae assumenda repellendus laborum minus deserunt placeat expedita facilis
                velit!</p>

        </div>
        <div class="services" id="gauva">
            <img src={ guavaImage } alt=""/>
            <h3>Gauva</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora dolorum error dignissimos
                laudantium minus qui consequuntur ipsam illo praesentium!lorem20 Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Suscipit ipsam molestiae assumenda repellendus laborum minus deserunt placeat expedita
                facilis velit!</p>
        </div>
    </div>
    <div id="read-btn">
        <button type="submit" id="btn3">Read More</button>
    </div>
    </>
  );
}

export default ServicesSection;
