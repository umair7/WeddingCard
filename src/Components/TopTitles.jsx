import React from "react";


function TopTitles(props){
    return(
        <div class="col-lg-12 col-12">
                            <div class="section-title-wrap mb-5">
                                <h2 class="section-title">{props.title}</h2>

                                <div class="section-title-bottom">
                                    <span class="section-title-line"></span>
                                    <i class="section-title-icon bi-heart-fill"></i>
                                    <span class="section-title-line"></span>
                                </div>
                            </div>
                        </div>

    );
}

export default TopTitles;