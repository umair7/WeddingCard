



import React from "react";
import SocialIconList from "../SocialMediaIcons/SocialIconList"
import PropsContact from "./propsContact";


function ContactUs(){
    return(
<section class="contact-section section-bg section-padding" id="section_7">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <div class="section-title-wrap mb-5">
                                <h2 class="section-title">Get in touch</h2>

                                <div class="section-title-bottom">
                                    <span class="section-title-line"></span>
                                    <i class="section-title-icon bi-heart-fill"></i>
                                    <span class="section-title-line"></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <h4 class="mb-4">Visit Us</h4>

                            <p> 5th Avenue at, Central Park S, 
                            <br /> New York, NY 10019, United States</p>
                        </div>

                        <PropsContact
            className="my-4 my-lg-0 my-md-0"
            title="Contact Information"
            email="hello@company.com"
            phone="090-080-0760"
          />
                       
                        <div class="col-lg-4 col-md-6 col-12">
                            <h4 class="mb-4">Socials</h4>

                              <SocialIconList />  
                            <p class="copyright-text mt-3 mb-0">Copyright © 2036 Wedding Lite Co., Ltd. 
                            <br/> Design: <a href="https://www.tooplate.com" target="_parent">Tooplate</a></p>
                        </div>

                    </div>
                </div>
            </section>
    );
}



export default ContactUs;
