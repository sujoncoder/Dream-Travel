import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      {/* footer part  */}
      <footer
        className="mt-5 p-4 "
        style={{ background: "#014c6e", color: "white" }}
      >
        {/* logo with some information part  */}
        <div className="row align-items-center">
          <div className="col-md-3">
            <h1 as={Link} to="/">
              TOUR PEDIA
            </h1>
          </div>
          {/* some importanr links part */}

          <div className="col-md-3 text-start ">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/add/place">Add place</Link>
              </li>
              <li>
                <Link to="/my/orders">My orders</Link>
              </li>
              <li>
                <Link to="/admin/manage/order">Manage Orders</Link>
              </li>
            </ul>
          </div>
          {/* about this website part  */}
          <div className="col-md-3">
            <h4>About</h4>
            <p className="text-start">
              We acknowledge the Traditional Aboriginal and Torres Strait
              Islander owners of the land, sea, and waters of the asia
              continent, and recognize their custodianship of culture and
              Country for over 60,000 years.
            </p>
          </div>
          {/* some social icons  */}
          <div className="col-md-3 social-links">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-google-play"></i>
            <br />
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
      </footer>
      {/* copyright section  */}
      <p
        className="text-center mb-0  text-white"
        style={{ background: "#014c6e" }}
      >
        All &copy; copyright reserved 2021 by{" "}
        <span>
          {" "}
          {/* designer or CEO or founder name  */}
          <a
            target="_blank"
            href="https://www.facebook.com/rashedulislam2004/"
            rel="noreferrer"
          >
            rashedul islam
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
