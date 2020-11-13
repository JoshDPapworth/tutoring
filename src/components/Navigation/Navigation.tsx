import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation(): JSX.Element {
  const [menuActive, toggleMenu] = useState(false);

  const menuClick = (): void => {
    toggleMenu(!menuActive);
  };
  return (
    <>
      <div className="container">
        <Link to="/home">
          <div className="header">Tasha's Tutoring...</div>
        </Link>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a
              role="button"
              className={"navbar-burger burger" + (menuActive ? " is-active" : "")}
              aria-label="menu"
              aria-expanded={menuActive ? "true" : "false"}
              data-target="navbarBasicExample"
              onClick={menuClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={"navbar-menu custom" + (menuActive ? " is-active" : "")}>
            <Link to="/about-me" className="navbar-item" onClick={(): void => toggleMenu(false)}>
              About me
            </Link>
            <Link to="/services" className="navbar-item" onClick={(): void => toggleMenu(false)}>
              Services
            </Link>
            <Link to="/reviews" className="navbar-item" onClick={(): void => toggleMenu(false)}>
              Reviews
            </Link>
            <Link to="/contact-me" className="navbar-item">
              Contact me
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
