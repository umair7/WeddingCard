import React  from "react";
import Navbar from "./Navbar";
import LoveStorySection from "./LoveStoryComponent/LoveStorySection";
import TheWedding from "./WeddingSection/TheWedding";
import RSVP from "../Components/RvspFolder/RSVP";
import ContactUs from "../Components/ContactFolder/ContactUs";
import FrontPhoto from "./FrontPhoto";
import LookingForPeople from "../Components/LookingForward/LookingForPeople";
import Gallery from "../Components/PhotosGallery/Gallery";
import Footer from "./Footer";



function App(){
   return(

    <div><Navbar />
    <FrontPhoto />
    <LoveStorySection />
    <TheWedding />
    <LookingForPeople />
    <Gallery />
    <RSVP/>
    <ContactUs />
    <Footer /> 
    </div>
    
   );
   

}

export default App;