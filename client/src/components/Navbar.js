import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Navbar({ en_no, Logout }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Result Manager
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item" >
                {en_no !== "" ? (
                    <button id="logout" className="px-4" onClick={Logout}>
                      Logout
                    </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
