import React from "react";
import WeddingProps from "../WeddingSection/WeddingProps";
import TopTitles from "../TopTitles";

function TheWedding(){
    return(

        <section class="the-wedding-section section-bg section-padding" id="section_3">
                <div class="container">
                    <div class="row">
                        <TopTitles title="Wedding"/>

                        <WeddingProps imgSrc="images/decorated-table-setting-wedding-celebration.jpg" 
                        programTitle="The Reception" venue="5th Avenue at, Central Park S" 
                        time="5:00 PM"/>


                        <WeddingProps imgSrc="images/front-view-wedding-couple.jpg" 
                        programTitle="Wedding Ceremony" venue=" 5th Avenue at, Central Park S" 
                        time="6:30 PM to 9:30 PM"/>

 
                        <div class="col-lg-4 col-md-6 col-12 d-flex flex-column">
                            <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8046.475092226252!2d-73.9752829999323!3d40.766655075110314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61f6aa300ba8339d!2sThe%20Plaza!5e1!3m2!1sen!2ssg!4v1662129560604!5m2!1sen!2ssg" width="100%" height="310" allowfullscreen="" loading="lazy"></iframe>

                            <div class="section-block">
                                <h3 class="my-3">Location</h3>

                                <p class="mb-2">
                                    <i class="bi-geo-alt me-1"></i>
                                    5th Avenue at, Central Park S, New York, NY 10019, United States
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

    );
}

export default TheWedding;