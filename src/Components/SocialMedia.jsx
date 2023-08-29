import React from 'react'
import fb from '../Assets/fb.png'
import twitter from '../Assets/twitter.png'
import linkdin from '../Assets/linkedin.png'
import instragram from '../Assets/instagram.png'


function SocialMedia() {
  return (
    <>
    <div id="last">
        <div class="last-col">
            <p style={{fontSize: '20px'}}>Fruits</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias reprehenderit unde officia quia nemo repellat laudantium minus consequuntur omnis.</p>

        </div>
        <div class="last-col">
            <p style={{fontSize: '20px'}}>Serivces</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ea deserunt, fugiat eius sint quisquam est ducimus aut numquam expedita</p>

        </div>
        <div class="last-col">
            <p style={{fontSize: '20px'}}>List</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus veritatis labore laboriosam nihil voluptates corporis aspernatur. Obcaecati odit ratione modi</p>

        </div>
        <div class="last-col" id="icon">
            <p style={{fontSize: '20px'}}>Follow Us</p>
            <img src={fb} alt="" id="icon-1"/>
            <img src={twitter} alt="" id="icon-2"/>
            <img src={linkdin} alt="" id="icon-3"/>
            <img src={instragram} alt="" id="icon-4"/>
            <p id="subscribe">Subscribe Now</p>
            <input type="text"/>
            <button>Subscribe</button>

        </div>
    </div>
    </>
  )
}

export default SocialMedia
