import React from "react";
import GalleryProps from "./GalleryProps";

function Gallery(){
    return(
        <section class="gallery-section section-bg section-padding" id="section_5">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <div class="section-title-wrap mb-5">
                        <h2 class="section-title">Gallery</h2>

                        <div class="section-title-bottom">
                            <span class="section-title-line"></span>
                            <i class="section-title-icon bi-heart-fill"></i>
                            <span class="section-title-line"></span>
                        </div>
                    </div>
                </div>

            
                <GalleryProps imgSrc1="images/gallery/bearded-stylish-groom-suit-beautiful-blonde.jpg" 
                    imgSrc2="images/gallery/couple.jpg" imgSrc3="images/gallery/groom-with-bride-are-knocking-glasses-with-champagne.jpg" />
 
                <GalleryProps imgSrc1="images/gallery/bearded-stylish-groom-suit-beautiful-blonde.jpg" 
                    imgSrc2="images/gallery/bride-groom-having-their-wedding-with-guests-beach.jpg" imgSrc3="images/gallery/wedding-ceremony-place-nature-outside-summer.jpg" />

              
                <GalleryProps imgSrc1="images/gallery/elegant-young-woman-fashionable.jpg" 
                    imgSrc2="images/gallery/young-couple-broke-down-car-while-traveling.jpg" imgSrc3="images/gallery/young-couple-traveling-car-sunny-day.jpg" />


            </div>
        </div>
    </section>

    );
}

export default Gallery;