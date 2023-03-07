import React from "react";

function SocialMediaLinks(props){
    return(
        <div class="social-icon-wrap mt-auto">
            <ul class="social-icon social-icon-list ms-auto">
                <li class="social-icon-item"><a href="#" class={`social-icon-link bi-${props.mediaName}`}></a></li>
            </ul>
        </div>
    );
}

export default SocialMediaLinks;
