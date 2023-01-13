import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light font-link" to={`/`}>
          Bradley Rodriguez
        </Link>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link
              className="nav-link active text-light font-link navLink"
              aria-current="page"
              to={`/aboutMe`}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item navLink">
            <Link
              className="nav-link active text-light font-link"
              to={`/projects`}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item navLink">
            <Link className="nav-link text-light font-link" to={`/contactMe`}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
