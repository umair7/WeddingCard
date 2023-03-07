import React from "react";
import LoveStoryImages from "./LoveStoryImages";
import SocialIconList from "../SocialMediaIcons/SocialMediaLinks";
import SocialMediaLinks from "../SocialMediaIcons/SocialMediaLinks";
import TopTitles from "../TopTitles";


 

function LoveStorySection(props){

    const socialMediaNames = ["facebook", "twitter", "instagram", "whatsapp"];
    return(
        <section class="about-section section-padding" id="section_2">
        <div class="container">
            <div class="row">

                 <TopTitles title="Love Story" />
                 
                 <LoveStoryImages src= "images/vertical-shot-beautiful-smiling-girl.jpg" name="Jolie" 
                whichSide="The Bride" aboutCharacter={<p>Sarah is amazing. When I first met her I knew she was amazing and every passing day reminds me of just how amazing she is!</p>
            }/>



                 
                <LoveStoryImages src= "images/vertical-shot-young-handsome-guy-autumn-park.jpg" name="BRATT" 
                whichSide="The Groom" aboutCharacter={<><p>  <p>I really love her incredibly unique blend of talents.</p>
                </p><p>She's a talented artist, always excited about a genuinely loving person.</p></>}/>

                 

            </div>
        </div>
    </section>
    );
}

export default LoveStorySection;