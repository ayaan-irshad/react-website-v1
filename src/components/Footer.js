import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h1>Contact Us</h1>
        <ul>
          <li>
            <span>Email</span> <i class="far fa-envelope"></i> :
            fmsfreightbrokersinc@gmail.com{" "}
            <a href="mailto:fmsfreightbrokersinc@gmail.com">Get Quote</a>
            
          </li>
          <li>
            {" "}
            <span>Phone</span> <i class="fas fa-phone"></i> : 916.280.4415{" "}
          </li>
          <li>
            <span>Address</span> <i class="fas fa-map-marker-alt"></i> : PO BOX
            292272, SACRAMENTO, CA 95829{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
