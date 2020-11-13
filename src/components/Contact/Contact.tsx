import * as React from "react";

function Contact(): JSX.Element {
  return (
    <div className="Contact">
      <header className="Contact-header">
        <h1 className="title">Contact Me...</h1>
      </header>
      <div className="description">
        <form className="contact-form">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Josh Papworth" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="e.g. josh@gmail.com" />
            </div>
          </div>

          <div className="field">
            <label className="label">Contact me</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Hello" />
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <a className="button is-primary">Submit</a>
            </p>
            <p className="control">
              <a className="button is-light">Cancel</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
