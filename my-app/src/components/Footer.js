import React from "react";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <footer className="align-items-center text-center text-white bg-dark col-lg-12 pt-2">
          <div className="container">
            <section className="mb-2">
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1 font-link"
                href="#"
                role="button"
                data-mdb-ripple-collor="light"
              >
                <h3>GitHub</h3>
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1 font-link"
                href="#"
                role="button"
                data-mdb-ripple-collor="light"
              >
                <h3>LinkedIn</h3>
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1 font-link"
                href="#"
                role="button"
                data-mdb-ripple-collor="light"
              >
                <h3>Email</h3>
              </a>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
