import React from "react";

export default function Navbar({ setCategory }) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-2">News</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => setCategory("business")}
                >
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => setCategory("general")}
                >
                  General
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => setCategory("science")}
                >
                  Science
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCategory("sports")}>
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
