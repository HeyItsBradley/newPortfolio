import React from "react";
import DevDive from "./devDive.png";
import ParkFinder from "./parkFinder.png";

function Project() {
  return (
    <div className="container-fluid pt-5">
      <div className="justify-content-around row pt-5">
        <div className="col-3">
          <div className="card col-12">
            <img src={DevDive} className="card-img-top" alt="..."></img>
            <div class="card-body">
              <p class="card-text font-link">
                DevDive, a concept for a developer job finding platform.
                Functionality includes, creating and editing an account with
                login verification, and the ability to search and apply for
                jobs!
              </p>
              <a
                href="https://github.com/BluSkreen/DevDive"
                class="card-link font-link text-black"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card col-12">
            <img src={ParkFinder} className="card-img-top" alt="..."></img>
            <div class="card-body">
              <p class="card-text font-link">
                National Park finder, this app allows you to select a state,
                which brings back the parks in that state. Picking a park from
                that list allows you to see a picture, description, and a link
                to directions! Also saves recent searches to local storage and
                displays them in a recent searchs tab.
              </p>
              <a
                href="https://github.com/HeyItsBradley/National-Park-Finder-with-Directions"
                class="card-link font-link text-black"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
