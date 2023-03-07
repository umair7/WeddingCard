import React from "react";

function FrontPhoto(){
    return(


        <section class="hero-section d-flex" id="section_1">
        <div class="hero-container container d-flex flex-column justify-content-end">
            <div class="row h-100">

                <div class="col-lg-6 col-12 my-auto">
                    <h2>👋 Hi there, You're invited</h2>

                    <h1 class="text-white hero-title mb-4">We're getting married</h1>

                    

                    <a href="#section_2" class="custom-link custom-btn btn mt-4">Discover More</a>
                </div>

                <div class="col-lg-3 col-12 save-the-date-wrap mt-auto ms-lg-auto">
                    <div class="save-the-date-thumb">
                        <h4 class="save-the-date-title">Save the date</h4>

                        <div class="save-the-date-body">
                            <span class="date">14th October 2024</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>



    );
}

export default FrontPhoto;