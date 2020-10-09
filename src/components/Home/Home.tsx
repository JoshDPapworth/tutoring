import * as React from "react";
// @ts-ignore
import Tasha from "../../assets/img/Tasha.png";
import ButtonCard from "../Cards/ButtonCard";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <header className="Home-header">
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
      <div className="cards">
        <div className="columns">
          <div className="column is-4 is-offset-2">
            <ButtonCard title="About me..." link="/about-me" />
          </div>

          <div className="column is-4">
            <ButtonCard title="Services..." link="/services" />
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-2">
            <ButtonCard title="Reviews..." link="/reviews" />
          </div>

          <div className="column is-4">
            <ButtonCard title="Contact me..." link="/contact-me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
