
import React from "react";
import { slides } from "./slides";
import { useState } from "react";

const SlideBar = () => {
    
const [shop, setShop] = useState(0);
const {id, image} = slides[shop];
console.log(slides[shop])

return(<div> 
    <div>
    <img src={id} />
    </div>

    <div>
    <img src={image} width="400px" alt="accessorize"/>
    </div>
   </div>)


}

export default SlideBar;


