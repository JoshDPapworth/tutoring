import * as React from "react";
import Card from "../Cards/Card";

function Services(): JSX.Element {
  return (
    <div className="Services">
      <header className="Services-header">
        <h1 className="title">Services</h1>
      </header>
      <div className="description">
        <Card
          title={"1:1 Tutoring"}
          description={
            "Hello, this is a brief description for my 1:1 tutoring. In this section I will include what the 1:1 tutoring will involve, however I currently do not have this information so I will just fill it with clutter."
          }
        />
        <Card
          title={"Small Group Tutoring"}
          description={
            "Hello, this is a brief description for my Small Group Tutoring. In this section I will include what the Small Group Tutoring will involve, however I currently do not have this information so I will just fill it with clutter."
          }
        />
        <Card
          title={"Online Tutoring"}
          description={
            "Hello, this is a brief description for my Online Tutoring. In this section I will include what the Online Tutoring will involve, however I currently do not have this information so I will just fill it with clutter."
          }
        />
      </div>
    </div>
  );
}

export default Services;
