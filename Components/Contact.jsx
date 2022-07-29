import React from "react";
import "./style.css";


const Contacts = (props)=>{
 
  //console.log(props)
    return(
      <section>
      <div className="contact-card">
        <img className="contact-image" src={props.img}/>
        <h3>{props.name}</h3>
        <div className="info-section">
          <img className="icons" src="http://simpleicon.com/wp-content/uploads/phone-1.png" />
          <p>{props.phone}</p>
        </div>
        <div className="info-section">
          <img className="icons" src="https://www.nicepng.com/png/detail/518-5185628_email-icon-symbol-of-email-black.png" />
          <p>{props.mail}</p>
        </div>
      </div>
      </section>
    )
}

export default Contacts