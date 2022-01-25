import React from "react";
import "../../App.css";

export default function SignUp() {
  return (
    <ul>
      <li>
        {" "}
        <h4> Sales and Logistics: Farhad Mirza</h4>{" "}
      </li>
      <li>
        <a href="mailto:accounting@fmsfreightbrokersinc.com">Get Quote</a>
      </li>
      <li>
        <span>Email</span> <i class="far fa-envelope"></i> :
        farhad@fmsfreightbrokersinc.com{" "}
      </li>
      <li>
        {" "}
        <span>Phone</span> <i class="fas fa-phone"></i> : +1-916-476-7689{" "}
      </li>
      <li>
        <span>Address</span> <i class="fas fa-map-marker-alt"></i> : PO BOX
        292272, SACRAMENTO, CA 95829{" "}
      </li>
    </ul>
  );
}
