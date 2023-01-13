import React from "react";
import DevDive from "./devDive.png";
import ParkFinder from "./parkFinder.png";
import jate from "./JATE.png";
import val from "./val.png";
import weather from "./weather.png";
import password from "./passwordGen.png";

function Project() {
  return (
    <div className="container-fluid pt-5 pb-5">
      <div className="justify-content-around row pt-5">
        <div className="col-3">
          <div className="card col-12">
            <a
              href="https://dev-dive.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DevDive}
                className="card-img-top project"
                alt="..."
                href="https://dev-dive.herokuapp.com/"
              ></img>
            </a>
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
            <a
              href="https://bradleys-text-editor.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={jate}
                className="card-img-top project"
                alt="..."
                href="https://bradleys-text-editor.herokuapp.com/"
              ></img>
            </a>
            <div class="card-body">
              <p class="card-text font-link">
                JATE (Just, another text editor. A simple text editing app for
                writing code snippits. Is a PWA and can be downloaded and ran
                offline)
              </p>
              <a
                href="https://github.com/HeyItsBradley/Text-Editor"
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://heyitsbradley.github.io/National-Park-Finder-with-Directions/"
            >
              <img
                src={ParkFinder}
                className="card-img-top project"
                alt="..."
              ></img>
            </a>
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
      <div className="justify-content-around row pb-5 pt-5">
        <div className="col-3">
          <div className="card col-12">
            <a
              href="https://heyitsbradley.github.io/Valorant-Agents/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={val}
                className="card-img-top project"
                alt="..."
                href="https://heyitsbradley.github.io/Valorant-Agents/"
              ></img>
            </a>
            <div class="card-body">
              <p class="card-text font-link">
                Valorant agents, a project using an api to bring in assets of
                the characters from the popular video game valorant.
              </p>
              <a
                href="https://github.com/HeyItsBradley/Valorant-Agents"
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
            <a
              href="https://heyitsbradley.github.io/Weather-Dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={weather}
                className="card-img-top project"
                alt="..."
                href="https://heyitsbradley.github.io/Weather-Dashboard/"
              ></img>
            </a>
            <div class="card-body">
              <p class="card-text font-link">
                Weather Dashboard, display the weather for a selected city, uses
                openWeatherApi
              </p>
              <a
                href="https://github.com/HeyItsBradley/Weather-Dashboard"
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://heyitsbradley.github.io/RandomPasswordGenerator/"
            >
              <img
                src={password}
                className="card-img-top project"
                alt="password generator"
              ></img>
            </a>
            <div class="card-body">
              <p class="card-text font-link">
                Password generator, creates a reandomized password based on the
                filters selected by the user.
              </p>
              <a
                href="https://github.com/HeyItsBradley/RandomPasswordGenerator"
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
