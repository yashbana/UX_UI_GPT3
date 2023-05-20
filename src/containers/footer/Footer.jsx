import React from "react";
import "./footer.css";
import gpt3Logo from "../../assests/logo.svg";

export default function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access </p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwood k12 182 DK Alknjkcb , ALL Rights Reserved </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links </h4>
          <p>Social Media</p>
          <p>Coounters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company </h4>
          <p>Teems & Condition </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch </h4>
          <p>Creachterwood K12 182 DK Alknjkcb</p>
          <p>7415425255</p>
          <p>rajputyashbana@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p> 2021 GPT-3. All right reserved.</p>
      </div>
    </div>
  );
}
