import React from 'react'
import './service.css'
function Service(){
    return(
        <>
        <h1 style={{marginTop:"1rem"}}>Our Top Products</h1>
        <h2> lorem lorem lorem loreamlorem lorem loreamlorem lorem loream. </h2>
        <img src="./img/leaf9.png" className="serleaf-l"/>
        <img src="./img/leaf10.png" className="serleaf-r"/>
        <img src="./img/leaf11.png" className="serleaf-ri"/>
        <img src="./img/leaf12.png" className="serleaf-le"/>

        <div id="carouselExampleControls" className="carousel container slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='card-wrap'>
        <div className="card" >
            <div className="img-wrap">
  <img src="./img/flower1.jpg"  alt="./img/flower1.jpg"/>
            </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
        </div>
        <div className="card" >
            <div className="img-wrap">
  <img src="./img/flower2.jpg"  alt="./img/flower1.jpg"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
</div>
        <div className="card" >
            <div className="img-wrap">
  <img src="./img/flower3.jpg"  alt="./img/flower1.jpg"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
</div>
<div className="card" >
    <div className="img-wrap">
  <img src="./img/flower4.jpg"  alt="./img/flower1.jpg"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
</div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className='card-wrap'>
        <div className="card" >
            <div className="img-wrap">
  <img src="./img/flower3.jpg"  alt="./img/flower1.jpg"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
        </div>
        <div className="card" >
            <div className="img-wrap">
  <img src="./img/flower2.jpg"  alt="./img/flower1.jpg"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
        </div>
        <div className="card" >
            <div className="img-wrap">
  <img src="./img/flower4.jpg"  alt="./img/flower1.jpg"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
</div>
<div className="card" >
    <div className="img-wrap">
  <img src="./img/flower1.jpg"  alt="./img/flower1.jpg"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">lorem impadcni</h5>
    <p className="card-text">Some quick example text to build on the lorem impadcni and make up the bulk of the card's content.</p>
    <i className="fa fa-heart"></i>
    <a href="#" className="ser-btn">READ MORE</a>
  </div>
</div>
      </div>
    </div>


  </div>
  <button className="carousel-control-pre" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-nex" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon"  aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    );
}

export default Service;