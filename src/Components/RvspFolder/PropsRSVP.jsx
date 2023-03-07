import React from "react";


 function PropsRSVP(props){
    return(
         <div className={`col-lg-4 col-md-6 col-12`}>
            <input type={props.type} name={props.name} id={props.id} class="form-control" placeholder={props.placeholder} required="" />
         </div> 

         
    );
 }

 function SelectField(props) {
    return (
      <div className={`col-lg-4 col-12`}>
        <select
          name="guests"
          className="form-select"
          id="guests"
          aria-label="Guests"
        >
          <option selected>Number of Guests</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    );
  }


  function TextAreaField(props){
   return( <div class="col-lg-12 col-12">
    <textarea class="form-control" id={props.id} name={props.name} placeholder={props.placeholder} rows="5" />
</div>
  );
}


    function Button(props){
        return(
        <div class="col-lg-3 col-5 mx-auto">
            <button type="submit" class="form-control">{props.buttonText}</button>
        </div>
        );
    } 
  
  

 export  {PropsRSVP,SelectField,TextAreaField,Button};