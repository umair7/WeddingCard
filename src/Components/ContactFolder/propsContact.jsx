import React from "react";
import SocialIconList from "../SocialMediaIcons/SocialIconList";

function PropsContact(props) {
  return(
    <div class="col-lg-4 col-md-6 col-12 my-4 my-lg-0 my-md-0">
    <h4 class="mb-4">{props.title}</h4>    

    <p class="mb-2">
        <a href={`mailto:${props.email}`}>{props.email}</a></p>
          
       
        <p>
        <a href={`tel:${props.phone}`}>{props.phone}</a>
      </p>
    </div>
 

  );
}

export default PropsContact;