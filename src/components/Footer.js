import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <h1>Contact Us</h1>
        <span>Email</span> <i class="far fa-envelope"></i>:
        fmsfreightbrokers@gmail.com
        <span>Phone</span>
        <i class="fas fa-phone"></i> : 916923945
        <span>Adress</span> <i class="fas fa-map-marker-alt"></i>: PO bocx 3309,
        Sacrememto , California 1233
      </div>
    </div>
  );
}

export default Footer;
