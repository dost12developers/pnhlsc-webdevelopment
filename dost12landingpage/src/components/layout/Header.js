import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <header className="sans-serif">
      <div className="cover bg-left bg-center-l mybackground ">
        <div className="bg-black-80">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid pa3">
              <a
                href="/"
                className="dib w2 h2 pa1 b--white-90 grow-large border-box"
              >
                <img
                  className="br-100 h3 w3 dib"
                  alt=""
                  src="/static/img/nav/logo2.png"
                />
              </a>
            </div>
            <div className="dtc v-mid tr pa3">
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/"
              >
                Home
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/lab"
              >
                Our Laboratory
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/process"
              >
                Halal Lab Certifiation Process
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/about"
              >
                About Us
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
