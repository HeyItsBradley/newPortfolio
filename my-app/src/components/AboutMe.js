import React from "react";
import pfp from "./profileImage.jpg";

function AboutMe() {
  return (
    <div className="container-fluid">
      <div className="row text-light text-center mt-5">
        <div className="col-lg-6 px-5">
          <img className="col-lg-2 mt-5" src={pfp} alt="Profile picture"></img>
          <h2 className=" mt-5 px-5">
            Hi ! I'm Bradley, I am a full stack Developer lookings for
            opportunities in the tech industry. I have completed a Full Stack
            Web Development Certificate program at Denver Universtiy. I have
            learned many popular technologies and am always looking for new ways
            to improve my skill set.
          </h2>
        </div>
        <h2 className="col-lg-6 mt-5 mb-5">
          Familiar with:
          <li className="col-lg-12 mt-4">JavaScript</li>
          <li className="col-lg-12 mt-4">CSS</li>
          <li className="col-lg-12 mt-4">HTML</li>
          <li className="col-lg-12 mt-4">MySQL</li>
          <li className="col-lg-12 mt-4">RESTful Architechture</li>
          <li className="col-lg-12 mt-4">
            M.E.R.N {"(Mando DB, Express, React, Node)"}
          </li>
        </h2>
      </div>
    </div>
  );
}

export default AboutMe;
