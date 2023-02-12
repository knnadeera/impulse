import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h6 className="newsletter_h6">
        Subscribe to our NewsLetter for all the latest news and special offers:
      </h6>
      <div className="input">
        <input type="email" className="newsletter_input"/>
        <button>
          <i className="fa-sharp fa-solid fa-play icon"></i>
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
