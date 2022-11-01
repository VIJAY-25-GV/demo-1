import React from 'react';
import './App.css';
import './navbar.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Sign from "./pages/Sign";
import { Route, Link, BrowserRouter } from 'react-router-dom';  
function App() {
  return (
    <BrowserRouter>
    <nav>
    <Link  to="/home"><img src='./img/logo.png' className='head-img'/></Link>
    <button onClick={toggle} className="navbar-btn">
    <i class="fa-solid fa-bars"></i>
    </button>
      <ul >
        <li >
          <Link  to="/"  onClick={toggle} >home</Link>
        </li>
        <li >
          <Link  to="/service" onClick={toggle} >service</Link>
        </li>
        <li>
          <Link to="/about"  onClick={toggle} >about</Link>
        </li>
        <li>
          <Link to="/contact"  onClick={toggle} >contact</Link>
        </li>
        <li>
          <Link to="/sign" className='sign' onClick={toggle} >sign in</Link>
        </li>
        <img src='./img/leaf2.png' className='navimg'/>
        </ul>
        <div className='head-icon'>
        <i class="fa-regular fa-user"></i>
        <i class="fa-sharp fa-solid fa-bag-shopping"></i>
        </div>

            </nav>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/service" component={Service}/>
    <Route path="/sign" component={Sign}/>
    </BrowserRouter>
  )
}

function toggle(){
return(document.querySelector("ul").classList.toggle('slide'));

}


export default App;







