import React from "react";

function LookingForPeople(props){
    return(


        <><div class="col-lg-6 col-12">
            <div class="people-thumb image-hover-thumb">
                <img src={props.imgSrc} class="people-image img-fluid" alt="" />
            </div>
        </div><div class="col-lg-6 col-12">
                <div class="section-block">
                    <div class="d-flex align-items-center my-3">
                        <h4 class="mb-0">{props.name}</h4>

                        <span class="about-tag ms-2">{props.entitled}</span>
                    </div>

                    <p>{props.explanation}</p>
                </div>
            </div></> 
    );
}


export default LookingForPeople;