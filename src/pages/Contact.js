import React from 'react'
import './contact.css'
function Contact(){
    return(
        <div classname="container">
            <div className="row">
                
            <section idName="contact ">
            <div className="contact col-11 col-lg-10">
                <h1> Subscribe to our newsletters</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates pariatur id quo iusto. Nulla est nobis esse harum, 
                    pariatur repellat odio saepe quod aperiam autem?
                </p>
                <div className='col-lg-9 input'>

                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Mail"/>
                <input type="text" placeholder="Message"/>
                </div>
                <button >
                    SEND MESSAGE
                </button>
            </div>
            <img src="./img/leaf1.png" className="conleaf col-lg-2 col-4"/>
            </section>
            <div id="footer">
                <div class="footer col-12">
                    <div>
                        <h4> About</h4>
                        <h5>Histry</h5>
                        <h5>Our Team</h5>
                        <h5>Mission Statement</h5>
                        <h5>Terms&Condition</h5>
                        <h5>Privacy Policy</h5>
                    </div>
                    <div>
                        <h4> What we do</h4>
                        <h5>News</h5>
                        <h5>Publicaction</h5>
                        <h5>Take action</h5>
                        <h5>Recommendation</h5>
                        <h5>Help</h5>
                    </div>
                    <div>
                        <h4>Your company</h4>
                        <h5>Halimun</h5>
                        <h5>Jakarata, City 1234</h5>
                        <h5>www.yurflowersite.com</h5>
                    </div>
                </div>
                <div class="fo">
                    <h6 style={{display:"inline"}}> Follow us !</h6>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>                
                    </div>
            </div>
            </div>
        </div>
    );
}
export default Contact;