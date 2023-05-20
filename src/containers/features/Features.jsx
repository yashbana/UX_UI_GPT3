import React from "react";

import Feature from "../../components/feature/Feature";
import "./features.css";

const featureData = [
  {
    title: "Improving and distructs instantly",
    text: "thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore",
  },
  {
    title: "Become the tended active",
    text: "thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore",
  },
  {
    title: "Message or am Nothing",
    text: "thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore",
  },
  {
    title: "Really boy low country",
    text: "thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore",
  },
];

export default function Features() {
  return (
    <div className="gpt3__features section__padding " id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Acces to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}

        {/* <Feature
          title="Improving and distructs instantly"
          text="thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore"
        />

        <Feature
          title="Become the tended active"
          text="thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore"
        />
        <Feature
          title="Message or am Nothing"
          text="thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore"
        />
        <Feature
          title="Really boy low country"
          text="thsi is good for our next genration is so good api and powerful id for using this api me a=make a easly web desing and manymore"
        /> */}
      </div>
    </div>
  );
}
