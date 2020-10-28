import React from "react";
import "./ContentDetails.css";

interface Props {
  amountOfPosts: number;
  openStories: Function;
}

export default function ContentDetails({ amountOfPosts, openStories }: Props) {
  return (
    <div className="content-details">
      <div onClick={(e) => openStories()} className="cover-image-box">
        <img src="./assets/images/stories-cover.jpg" />
      </div>
      <div className="details">
        <span className="title">#animals</span>
      </div>
    </div>
  )
}
