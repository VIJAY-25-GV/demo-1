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
    <nav className="  navbar-expand-lg">
    <Link  to="/home"><img src='./img/logo.png' className='head-img'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <i class="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul >
        <li >
          <Link  to="/" >home</Link>
        </li>
        <li >
          <Link  to="/service" >service</Link>
        </li>
        <li>
          <Link to="/about" >about</Link>
        </li>
        <li>
          <Link to="/contact" >contact</Link>
        </li>
        <li>
          <Link to="/sign" className='sign'>sign in</Link>
        </li>
        <img src='./img/leaf2.png' className='navimg'/>
        </ul>
        </div>
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

export default App;



