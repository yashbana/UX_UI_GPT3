import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

import Articals from "../../components/articals/Artical";
import "./blog.css";

export default function Blog() {
  return (
    <div className="gpt3__blog section__padding " id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happing , We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Articals
            imageUrl={blog01}
            date="Sep 26, 2023"
            title="GPT3 and Open AI is the future. Let us explore how  it is "
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Articals
            imageUrl={blog02}
            date="Sep 26, 2023"
            title="GPT3 and Open AI is the future. Let us explore how  it is "
          />
          <Articals
            imageUrl={blog03}
            date="Sep 26, 2023"
            title="GPT3 and Open AI is the future. Let us explore how  it is "
          />
          <Articals
            imageUrl={blog04}
            date="Sep 26, 2023"
            title="GPT3 and Open AI is the future. Let us explore how  it is "
          />
          <Articals
            imageUrl={blog05}
            date="Sep 26, 2023"
            title="GPT3 and Open AI is the future. Let us explore how  it is "
          />
        </div>
      </div>
    </div>
  );
}
