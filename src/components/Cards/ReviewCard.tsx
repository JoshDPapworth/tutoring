import * as React from "react";

export interface Props {
  title: string;
  description: string;
  image: string;
}

function ReviewCard(props: Props): JSX.Element {
  return (
    <div className="card">
      <div className="columns">
        <div className="column">
          <div className="card-content">
            <p className="title">{props.title}</p>
            <p className="content">{props.description}</p>
          </div>
        </div>
        <div className="column">
          <div className="card-image">
            <figure className="image">
              <img src={props.image} alt="Placeholder image" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
