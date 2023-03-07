import React from "react";
import SocialIconList from "../SocialMediaIcons/SocialIconList";

function LoveStoryImages(props){
    return(
        <><div class="col-lg-3 col-12">
            <div class="image-hover-thumb">
                <img src={props.src} class="about-image img-fluid" alt="" />
            </div>
        </div>
        <div class="col-lg-3 col-12">
                <div class="about-info-wrap d-flex flex-column">
                    <div class="about-info-title d-flex align-items-center my-3">
                        <h4>{props.name}</h4>

                        <span class="about-tag ms-2">{props.whichSide}</span>
                    </div>

                    <p>{props.aboutCharacter}</p>



                    <SocialIconList />


                </div>
            </div></>

    );
}

export default LoveStoryImages;