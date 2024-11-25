import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillPinterest } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="f-logo">Organic Oasis</div>
      <ul className="links">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="icon">
        <ul className="icon-container">
          <li>
            <BsInstagram />
          </li>
          <li>
            <AiFillPinterest />
          </li>
          <li>
            <IoLogoWhatsapp />
          </li>
        </ul>
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright @2024 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
