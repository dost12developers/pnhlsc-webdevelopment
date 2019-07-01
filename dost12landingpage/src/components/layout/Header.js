import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header className="sans-serif">
      <div className="cover bg-left bg-center-l mybackground ">
        <div className="bg-black-80">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid pa3">
              <Link
                to="/"
                className="dib w2 h2 pa1 b--white-90 grow-large border-box"
              >
                <img className="br-100 h3 w3 dib" alt="" src="/favicon.png" />
              </Link>
            </div>
            <div className="dtc v-mid tr pa3">
              <Link
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                to="/"
              >
                Home
              </Link>
              <Link
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                to="/lab"
              >
                Our Laboratory
              </Link>
              <Link
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                to="/process"
              >
                Halal Lab Certifiation Process
              </Link>
              <Link
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                to="/about"
              >
                About Us
              </Link>
              <Link
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
