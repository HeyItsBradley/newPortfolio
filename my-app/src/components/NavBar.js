import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
      <div class="container-fluid">
        <Link class="navbar-brand text-light font-link" to={`/`}>
          Bradley Rodriguez
        </Link>

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link
              class="nav-link active text-light font-link"
              aria-current="page"
              to={`/aboutMe`}
            >
              About Me
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-light font-link" to={`/projects`}>
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light font-link" to={`/contactMe`}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
