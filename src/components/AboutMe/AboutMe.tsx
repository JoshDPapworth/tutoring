import * as React from "react";
// @ts-ignore
import Tasha from "../../assets/img/Tasha.png";
import Card from "../Cards/Card";

function AboutMe(): JSX.Element {
  return (
    <div className="AboutMe">
      <header className="About-header">
        <h1 className="title">All About Me...</h1>
        <div className="home-image">
          <div className="card  card-image1">
            <div className="card-image">
              <figure className="image is-128x128">
                <img src={Tasha} alt="image" />
              </figure>
            </div>
            <div className="card-content card1">
              <div className="content">Miss Leivers</div>
            </div>
          </div>
        </div>
      </header>
      <div className="description">
        <Card
          title={"Info"}
          description={
            "Hello, this is a brief description for my 1:1 tutoring. In this section I will include what the 1:1 tutoring will involve, however I currently do not have this information so I will just fill it with clutter."
          }
        />
        <Card
          title={"Education"}
          description={
            "Hello, this is a brief description for my 1:1 tutoring. In this section I will include what the 1:1 tutoring will involve, however I currently do not have this information so I will just fill it with clutter."
          }
        />
      </div>
    </div>
  );
}

export default AboutMe;
