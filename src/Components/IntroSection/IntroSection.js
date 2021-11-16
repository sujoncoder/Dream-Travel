import React from "react";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <div>
      {/* intro contaner  */}
      <div className="intro-container">
        <div>
          <div>
            {/* intro message */}
            <h1>welcome our DREAM TRAVEL‌ organizetion</h1>
            <h4>hi we have provide best bervices in bangladesh</h4>
            {/* button for more vetails  */}
            <button className="btn btn-success">
              <i className="fas fa-arrow-circle-right"></i> {"  "}Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
