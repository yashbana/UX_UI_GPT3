import React from "react";
import { Feature } from "../../components";
import "./WhatGPT3.css";

export default function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3  section__padding" id="wgpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature
          title="What is gpt3 "
          text="Lorem ipsum consectetur adipamet consectetur adipisicing elit. Laboriosam veniam ea quis eligendi amet consectetur adipamet consectetur adipisicing elit. Laboriosam veniam ea quis eligendi amet consectetur adip isicing elit. Laboriosam veniam ea quis eligendi amet consectetur adipisicing elit. Laboriosam veniam ea quis eligendi. Ut quo eligendi exercitationitate!"
        />
      </div>
      <div className="gpt3__whatgpt3-headding gradient__text">
        <h1>The Possibility are beyond your imagination</h1>
        <p> Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbox"
          text="Chatbos is a  for chatting purpose this is good for ours"
        />
        <Feature
          title="knowledgebase"
          text="Knowledge is good for know what condition is here he tells about all detaills"
        />

        <Feature
          title="Education"
          text="Education is very important for this genration it is play very important role"
        />
      </div>
    </div>
  );
}
