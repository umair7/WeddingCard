import React from "react";


function WeddingProps(props){
    return(
        <div class="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
        <div class="image-hover-thumb">
            <img src={props.imgSrc} class="img-fluid" alt="" />
        </div>

        <div class="section-block">
            <h3 class="my-3">{props.programTitle}</h3>

            <p class="mb-2">
                <i class="bi-geo-alt me-1"></i>
                {props.venue}
            </p>

            <p>
                <i class="bi-clock me-1"></i>
                {props.time}
            </p>
        </div>
    </div>
    );
}

export default WeddingProps;