// Component
// write rfc for react function based component
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutc}
              </a>
            </li>
          </ul>
          
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
          
          <div class={`form-check form-switch text-${props.mode==='dark'?'white':'dark'}`}>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customSwitch1"
                  onClick={props.toggleMode}
                />
                <label class="form-check-label" for="customSwitch1">
                  Enable Dark Mode
                </label>
            </div>

        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutc: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutc: "About us",
};
