import React from "react";
import "./header.css";
import ai from "../../assests/ai.png";
import people from "../../assests/people.png";

export default function Header() {
  return (
    <div className="gtp3__header section__padding " id="home">
      <div className="gtp3__header-content">
        <h1 className="gradient__text ">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgencer unpleasing. Not
          through all exercise blessing indulgencer way everything joy
          alternation boistreoius the attechment. Party we years to order allow
          asked off.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Addres" />
          <button className="button">Get Started</button>
        </div>

        <div className="gtp3__header-conten__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gtp3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}
