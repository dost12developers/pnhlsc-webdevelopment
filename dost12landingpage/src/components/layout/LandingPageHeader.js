import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header className="sans-serif">
      <div className="cover bg-left bg-center-l mybackground">
        <div className="bg-black-80 pb5 pb6-m pb7-l">
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
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
              Philippine National Halal Laboratory and Science Center (PNHLSC)
            </h1>
            <h2 className="fw1 f4 white-80 mt3 mb4">
              The PNHLSC is the premier institution under the Department of
              Science and Technology Regional Office 12 in the Republic of the
              Philippines.
            </h2>
            <a
              className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
              href="#service"
            >
              Our Service
            </a>
            <a
              className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
              href="http://product.halalscience.ph"
            >
              Our Halal Products
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
