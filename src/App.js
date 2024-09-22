import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact/Contact';
import AboutProduct from './AboutProduct';
import Background from './BackGround';

import { useState } from 'react';
import { slides } from './slides';



function App() {

  const [shop, setShop] = useState(0);
const {id, image} = slides[shop];
console.log(slides[shop])

return(<div>
  
  <Router>
  <nav>
    <Link to="/" className='link'>Shop</Link>
    <Link to="/about" className='link'>About</Link>
    <Link to="/contact" className='link'>Contact</Link>
  </nav>

  <Background />

<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path='/about/title' element={<AboutProduct />} />
</Routes>     
</Router>

<div>
  <img src={id} />
   </div>

<div>
  <img src={image} width="400px" alt="accessorize"/>
   </div>



</div>
)


}






export default App;
