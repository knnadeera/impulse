import React from "react";
import "./ContactUsScreen.css";

const ContactUsScreen = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="280"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=9%20market%20hill,%20framlingham+(Impulse%20Faction%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
      </iframe>
      <div className="contact">
        <div>
          Pop in and see us at:
          <h4>9 Market Hill, Framlingham, Woodbridge IP13 9AN</h4>
        </div>
        <div className="contact_h4">
          or call:<h4>01728 720184</h4>
        </div>
        <div className="contact_h4">
          email:<h4>hello@implusefaction.co.uk</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactUsScreen;
