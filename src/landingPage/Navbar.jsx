import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="media/logo.svg"
            alt="zerodhaLogo"
            className="img-fluid"
            style={{ width: "150px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
