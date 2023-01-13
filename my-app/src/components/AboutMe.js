import React from "react";
import pfp from "./profileImage.jpg";

function AboutMe() {
  return (
    <div className="container-fluid">
      <div className="row text-light text-center mt-5 ">
        <div className="col-lg-6 px-5">
          <img className="col-lg-2 mt-5" src={pfp} alt="Pfp"></img>
          <h2 className=" mt-5 px-5 font-link">
            Hi ! I'm Bradley, I am a full stack Developer lookings for
            opportunities in the tech industry. I have completed a Full Stack
            Web Development Certificate program at Denver Universtiy. I have
            learned many popular technologies and am always looking for new ways
            to improve my skill set.
          </h2>
        </div>
        <h2 className="col-lg-6 mt-5 mb-5 font-link">
          Familiar with:
          <li className="col-lg-12 mt-4 font-link">JavaScript</li>
          <li className="col-lg-12 mt-4 font-link">CSS</li>
          <li className="col-lg-12 mt-4 font-link">HTML</li>
          <li className="col-lg-12 mt-4 font-link">MySQL</li>
          <li className="col-lg-12 mt-4 font-link">RESTful Architechture</li>
          <li className="col-lg-12 mt-4 font-link">
            M.E.R.N {"(Mango DB, Express, React, Node)"}
          </li>
        </h2>
      </div>
    </div>
  );
}

export default AboutMe;
