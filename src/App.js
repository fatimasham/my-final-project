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
import SlideBar from './SlideBar';


function App() {

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
    <Route path='/about/:title' element={<AboutProduct />} />
</Routes>     
</Router>

<SlideBar />

</div>
)
}

export default App;

