import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light font-link" href="#">
          Bradley Rodriguez
        </a>

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a
              class="nav-link active text-light font-link"
              aria-current="page"
              href="#"
            >
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-light font-link" href="#">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light font-link" href="#">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
