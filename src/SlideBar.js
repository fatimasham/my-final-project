
import React from "react";
import { slides } from "./slides";
import { useState } from "react";


const SlideBar = () => {

const [shop, setShop] = useState(3);
const {id, image, description} = slides[shop];

const previousShop= () => {
    setShop((shop => {
        shop --;
        if (shop < 0) {
            return slides.length-1;
        }
        return shop;
    }))
}

const nextShop= () => {
    setShop((shop =>{
        shop ++;
        if (shop > slides.length - 1) {
            shop = 0;
        }
        return shop;
    }))
}

return(<div> 

    <div className="location">
    <img src={image} width="600px" alt="accessorize"/>
    </div>

    <div className="location">
    <h6>{id} - {description}</h6>
    </div>

    <div className="btn location">
        <button onClick={previousShop}>Previous</button>
        <button onClick={nextShop}>Next</button>
    </div>
   </div>)
}

export default SlideBar;



