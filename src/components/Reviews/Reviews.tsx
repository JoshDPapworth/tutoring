import * as React from "react";
import ReviewCard from "../Cards/ReviewCard";

function Reviews(): JSX.Element {
  return (
    <div className="Reviews">
      <header className="Reviews-header">
        <h1 className="title">Reviews</h1>
      </header>
      <div className="description">
        <ReviewCard title={"Josh"} description={"this is some review"} image={"https://bulma.io/images/placeholders/1280x960.png"} />
      </div>
    </div>
  );
}

export default Reviews;
