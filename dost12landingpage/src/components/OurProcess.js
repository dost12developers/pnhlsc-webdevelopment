import React from "react";
import Footer from "./Footer";
import "./OurProcess.css";
import Header from "./layout/Header";

const OurProcess = ({ onRouteChange }) => {
  return (
    <div>
      <Header />
      <div className="pa3 pa5-ns">
        <div className="f2 tc">Our Process</div>
        <div className="tc">
          <img
            className="fl w-80"
            alt=""
            src="/images/service/halalprocess.jpg"
          />
        </div>
        <div className="flex items-center justify-center pa4 bg-lightest-blue navy ">
          <div className="lh-title ml3 f3">
            Start The Certification Process Today or Inquire for more
            Information!
          </div>
          <a
            className="link dib grow-large border-box f3"
            href="http://email.halalscience.ph/"
          >
            <button className=" f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">
              Send Us
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurProcess;
