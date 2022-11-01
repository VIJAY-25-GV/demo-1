import React from 'react'
import './about.css'
function About(){
    return(
        <div idName="about" className="container-fluid">
            <div className="row">
        <div className="about">
        <h1> How we do it</h1>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <img src="./img/home-border.png" className="about-border col-4"/>
        <img src="./img/home-box.jpg" className="about-box col-lg-2 col-2"/>
        {/* <img src="./img/about-img1.jpg" alt="flower" className="about-img"/> */}
        <video src="./video/dancin.mp4" autoPlay loop className='col-8 col-lg-6'/>
        <img src="./img/leaf2.png" className="leaf3 col-2 col-lg-2"/>
        <img src="./img/leaf3.png" className="leaf4 col-2 col-lg-1"/>
    </div>
        <div className="about-banner col-lg-12 col-12 ">       
            <img src="./img/banner-img.jpg" alt="banner" className="col-lg-6 col-8 about-banner-img "/>
            <div className="banner-inner col-lg-6 col-3">
            <button >
                SPECIAL OFFER
            </button>
            <h3>
                20%
            </h3>
            <p>Lorem ipsm dolonr<br/> sit ametsit amet.</p>
            <img src="./img/leaf4.png"  className="leaf5 col-lg-2 col-2"/>
            <img src="./img/leaf5.png" className="leaf6 col-lg-2 col-2"/>
        </div>
        </div>
        <div class="firstimg ">
            <img src="./img/about-img2.jpg" className="first-img col-lg-5 col-7"/>
            <img src="./img/leaf7.png" class="first-leaf col-lg-1 col-2"/>
            <img src="./img/home-border.png" className="about-border1 firstborder col-lg-3 col-4"/>
            <img src="./img/home-box.jpg" className="about-box1 firstbox col-lg-1 col-2"/>
            <div className="first-outter ">
                <div className="first-inner ">
                    <h1 style={{textAlign:"start"}}>we select the best flowers</h1>
                    <p style={{color:"rgb(136, 117, 57)",textAlign: "start", fontSize: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione placeat nesciunt libero nobis 
                        repellat voluptatibus? Officia nihil sunt error?</p>
                        <button className="first-btn">READ MORE</button>
                </div>
            <img src="./img/leaf6.png" className="leaf7 col-lg-1 col-3"/>

            </div>
        </div>
        <div className="secondimg">
            <img src="./img/leaf7.png" className="sec-leaf col-lg-1 col-2"/>
            <img src="./img/about-img3.jpg" class="second-img col-lg-5 col-7"/>
            <img src="./img/home-border.png" className="about-border2 sec-border col-lg-3 col-4"/>
            <img src="./img/home-box.jpg" className="about-box2 sec-box col-lg-1 col-2"/>
            <div className="sec-outter">
                <div className="sec-inner">
                    <h1 style={{textAlign:"start"}}>we select the best flowers</h1>
                    <p style={{color:"rgb(136, 117, 57)",textAlign: "star", fontsize: "1.2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione placeat nesciunt libero nobis 
                        repellat voluptatibus? Officia nihil sunt error?</p>
                        <button className="sec-btn">READ MORE</button>
                </div>
                <img src="./img/leaf8.png" className="leaf9 col-lg-1 col-3"/>

            </div>
        </div>
        <div className="third">
            <img src="./img/leaf7.png" className="third-leaf  col-lg-1 col-2"/>
            <img src="./img/about-img4.jpg" className="third-img  col-lg-5 col-7"/>
            <img src="./img/home-border.png" className="about-border3 third-border col-lg-3 col-4"/>
            <img src="./img/home-box.jpg" className="about-box3 third-box col-lg-1 col-2"/>
            <div className="third-border"></div>
            <div className="third-box"></div>
            <div className="third-outter">
                <div className="third-inner">
                    <h1 style={{textAlign:"start"}}>we select the best flowers</h1>
                    <p style={{color:"rgb(136, 117, 57)" ,textAlign:"start", fontSize: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione placeat nesciunt libero nobis 
                        repellat voluptatibus? Officia nihil sunt error?</p>
                        <button className="third-btn">READ MORE</button>
                </div>
                <img src="./img/leaf6.png" className="leaf8 col-lg-1 col-3"/>
            </div>
        </div>
        </div>
    </div>
    );
}
export default About;