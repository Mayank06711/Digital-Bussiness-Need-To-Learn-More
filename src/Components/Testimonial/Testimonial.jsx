import React from "react";
import "./Testimonial.css";
import SlickSlider from "./SlickSlider";
const Testimonial = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className="tag">Testimonial</span>
            <span className="title">Access capital that complents traditional funding option</span>
            <span className="des">What peple say about </span>
          </div>

          
        </div>
        {/* slider */}
          <SlickSlider />
      </div>
    </div>
  );
};
export default Testimonial;
