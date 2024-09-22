import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Accessorize from "./Accessorize";



function Home() {

    const [accessorize, setAccessorize] = useState(data);

    const chosenAccessorize = (searchTerm) => {
      const newAccessorize = data.filter(element => element.searchTerm === searchTerm);
      setAccessorize(newAccessorize); 
    }
  
    return(<div>
      <div className='cont'>
        <h2 className='back'>UP TO 50% OFF SALE / SHOP NOW</h2>
      </div>
      <Buttons filteredAccessorize={chosenAccessorize}/>
      <Accessorize itemsForSale={accessorize}/>
  </div> 
  )
}
export default Home;