import React from "react";


function GalleryProps(props){
    return(
        <><div class="col-lg-4 col-12">
            <div class="gallery-thumb image-hover-thumb">
                <a href={props.imgSrc1} class="popup-image">
                    <img src={props.imgSrc1} class="gallery-image img-fluid" alt="" />
                </a>
            </div>
        </div><div class="col-lg-4 col-12 d-flex flex-column">
                <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                    <a href={props.imgSrc2} class="popup-image">
                        <img src={props.imgSrc2} class="gallery-image img-fluid" alt="" />
                    </a>
                </div>

                <div class="gallery-thumb gallery-thumb-small image-hover-thumb">
                    <a href={props.imgSrc3} class="popup-image">
                        <img src={props.imgSrc3} class="gallery-image img-fluid" alt="" />
                    </a>
                </div>
            </div></>

    );
}

export default GalleryProps;