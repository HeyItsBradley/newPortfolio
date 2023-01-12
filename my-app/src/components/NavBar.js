import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">
          Bradley Rodriguez
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-light" href="#">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
