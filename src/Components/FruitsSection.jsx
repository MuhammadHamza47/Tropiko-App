import React from 'react';
import bstorange from '../Assets/orange.png'
import bstgrapes from '../Assets/grapes.png'
import bstgauva from '../Assets/gauva.png'

function FruitsSection() {
  return (
   <>
   {/* <div id="fr-fruits"> */}
        {/* <h1 id="fruit">Fresh Fruits</h1> */}
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, officiis. Possimus iste ea voluptatum */}
            {/* quasi?</p> */}
    {/* </div> */}
    <div id="fr-orange">
        <div class="fritems-left">
            <p id="items">Best Fresh Orange</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus, unde repellendus possimus ratione
                quas. Nisi sint necessitatibus inventore, nulla maiores ut fugit quia harum rem natus quasi. Magnam,
                nulla.</p>
            <button>Buy Now</button>
        </div>
        <div id="fritem-orange">
            <img src={bstorange} alt=""/>
        </div>
    </div>
    <div id="fr-grapes">
        <div class="fritems-left">
            <p id="items">Best Fresh Grapes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus, unde repellendus possimus ratione
                quas. Nisi sint necessitatibus inventore, nulla maiores ut fugit quia harum rem natus quasi. Magnam,
                nulla.</p>
            <button>Buy Now</button>
        </div>
        <div id="fritem-grapes">
            <img src={bstgrapes} alt=""/>
        </div>
    </div>
    <div id="fr-gauva">
        <div class="fritems-left">
            <p id="items">Best Fresh Gauva</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus, unde repellendus possimus ratione
                quas. Nisi sint necessitatibus inventore, nulla maiores ut fugit quia harum rem natus quasi. Magnam,
                nulla.</p>
            <button>Buy Now</button>
        </div>
        <div id="fritem-gauva">
            <img src={bstgauva}alt=""/>
        </div>
    </div>
   </>
  );
}

export default FruitsSection;
