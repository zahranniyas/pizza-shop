import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img width={140} height={80} src={assets.logo} alt="" />
          <p>
            The Pizza Shop has been in operations since 2003, serving the people
            of Sri Lanka the highest quality pizza on offer. Built on the belief
            that pizza night should be special, we carry that belief into
            everything we do. We’re proud to serve and deliver it fast and with
            a smile.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 112 111 222</li>
            <li>contact@thepizzashop.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © thepizzashop.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
