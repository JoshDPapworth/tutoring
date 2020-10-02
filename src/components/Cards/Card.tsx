import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {
  title: string;
  link: string;
}

function Card(props: Props): JSX.Element {
  return (
    <Link to={props.link}>
      <div className="card test">
        <div className="card-content">
          <p className="title">{props.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
