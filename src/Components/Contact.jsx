import React from "react";
import dish from '../Assets/orange-dish.png'

function Contact() {
  return (
    <>
      <div id="contact">
        <div id="contact-left">
          <h1 id="cont">Contact Us</h1>
          <p>Name</p>
          <hr />
          <p>Phone Number</p>
          <hr />
          <p>Email</p>
          <hr />
          <p id="message">Message</p>
          <hr />
          <button type="submit" id="send">
            SEND
          </button>
        </div>
        <div id="contact-right">
          <img src={dish} alt="" />
        </div>
      </div>
    </>
  );
}

export default Contact;
