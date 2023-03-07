import React from "react";
import { ReactDOM } from "react";
import {PropsRSVP, SelectField, TextAreaField, Button} from "./PropsRSVP";
 


function RSVP(){
    return(

        <section class="rsvp-section section-padding" id="section_6">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12 mx-auto">
                            <div class="rsvp-form-wrap">
                                <div class="section-title-wrap mb-5">
                                    <h2 class="section-title">Rsvp</h2>

                                    <div class="section-title-bottom">
                                        <span class="section-title-line"></span>
                                        <i class="section-title-icon bi-heart-fill"></i>
                                        <span class="section-title-line"></span>
                                    </div>
                                </div>

                                <h5 class="mb-4">Will you attend? <span class="text-muted">Please reserve before March 2th, 2022</span></h5>

                                <form class="custom-form rsvp-form" role="form">
                                    <div class="row">
                                     
                                      <PropsRSVP type="text" name="name" id="name" placeholder="FullName*" />
                                      <PropsRSVP type="email" name="email" id="email" placeholder="Email Address*" />

                                    <SelectField />
                                    
                                    <TextAreaField id="message" name="message" placeholder="Message (Optional)" />

                                    <Button buttonText="Send Invitation" />
                                       

                                      

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

    );
    

}

export default RSVP;