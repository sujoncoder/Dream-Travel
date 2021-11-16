import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    // offer container
    <div className="offer-container">
      <div
        className="row"
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          width: "90%",
        }}
      >
        {/* offer content  */}
        <div className="col-md-6 offer-content ">
          <div>
            <h1>TAKE A ROAD TRIP WITH THE <span style={{color:'pink'}}>DREAM TRAVEL</span> ‌‌</h1>
            <p>
              Travel is the perfect way to meet new friends and try something
              new. Join Emma, Simon, Anthony and Lachy as they jump in the Big
              Red Car to explore Australia.
            </p>
            <button className="btn btn-warning text-dark font-weight-bold">
              get this Offer
            </button>
          </div>
        </div>
        {/* offer right side part  */}
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Offer;
