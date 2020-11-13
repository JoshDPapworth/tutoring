import * as React from "react";

export interface Props {
  title: string;
  description: string;
}

function Card(props: Props): JSX.Element {
  return (
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column">
            <p className="title">{props.title}</p>
          </div>
          <div className="column">
            <p className="content">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
