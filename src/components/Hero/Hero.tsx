import * as React from "react";
import "../../assets/scss/Hero.scss";

function Hero(): JSX.Element {
  return (
    <div className="hero-container">
      <h1>Tasha's Tutoring...</h1>
      <div className="hero-buttons">
        <button className="button">Hello</button>
        <button className="button">Goodbye</button>
      </div>
    </div>
  );
}

export default Hero;
