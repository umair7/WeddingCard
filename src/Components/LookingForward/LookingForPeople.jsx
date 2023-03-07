import React from "react";
import TopTitles from "../TopTitles";
import LookingProps from "./LookingProps";

function LookingForPeople(){
    return(

        <section class="people-section section-padding" id="section_4">
                <div class="container">
                    <div class="row">

                       <TopTitles title="Groomsmen & Bridesmaid" />

                        <div class="col-lg-3 col-md-5 col-12 me-auto">
                            <nav>
                                <div class="nav nav-tabs flex-lg-column align-items-baseline" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-groomsmen-tab" data-bs-toggle="tab" data-bs-target="#nav-groomsmen" type="button" role="tab" aria-controls="nav-groomsmen" aria-selected="true">
                                        <h3>Groom Side</h3>
                                    </button>

                                    <button class="nav-link" id="nav-bridesmaid-tab" data-bs-toggle="tab" data-bs-target="#nav-bridesmaid" type="button" role="tab" aria-controls="nav-bridesmaid" aria-selected="false">
                                        <h3>Bride Side</h3>
                                    </button>
                                </div>
                            </nav>
                        </div>

                        <div class="col-lg-8 col-md-6 col-12">
                            <div class="tab-content" id="nav-tabContent">

                                <div class="tab-pane fade show active" id="nav-groomsmen" role="tabpanel" aria-labelledby="nav-groomsmen-tab">
                                    <div class="row">
                                       

                                       <LookingProps imgSrc="images/people/portrait-handsome-attractive-young-man-posing.jpg" name="Kevin" entitled="Cousin"
                                        explanation={  <p>Wedding Lite is free HTML template provided by Tooplate website. It is based on Bootstrap v5.1.3 CSS layout. You are free to use it for your wedding.</p>} />
                                     
                                       
                                    <LookingProps imgSrc="images/people/attractive-laughing-guy-having-fun-smiling-happy.jpg" name="Wilson" entitled="Best friend"
                                     explanation={  <p>Feel free to make a PayPal contribution to contact [at] tooplate.com to support the open community of free HTML templates. Thank you.</p>} />
                                    
                                    </div>
                                </div>

                                <div class="tab-pane fade show" id="nav-bridesmaid" role="tabpanel" aria-labelledby="nav-bridesmaid-tab">
                                    <div class="row">
                                    
                                    <LookingProps imgSrc="images/people/lifestyle-people-emotions-casual-concept.jpg" name="Jennie" entitled="Sister" 
                                    explanation={<p>You may want to explore more HTML templates on Too CSS website which collects great templates.</p>} />

                                     

                                <LookingProps imgSrc="images/people/portrait-beautiful-young-woman-standing-grey-wall.jpg" name="Madam" entitled="Friend" 
                                    explanation={<p>You are not allowed to redistribute this template source files on any other website. Please contact Tooplate for more info.</p>
                                } />

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
    );
}

export default LookingForPeople;