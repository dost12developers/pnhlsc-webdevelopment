import React from "react";
import "./AboutUs.css";
import Footer from "./Footer";
import Header from "./layout/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="pa3 pa5-ns">
        <div className="f2">
          Philippine National Halal Laboratory and Science Center{" "}
        </div>
        <div className="f6">
          About DOST XII - Philippine National Halal Laboratory{" "}
        </div>
        <p className="measure-wide">
          The Philippines National Halal Laboratory and Science Center is the
          premier institution under the Department of Science and Technology
          Regional Office 12 in the Republic of the Philippines.
        </p>

        <p className="measure-wide">
          The PNHLSC is manned and managed by competent and dedicated Muslim
          Ranking Officials, scientists and employees that ensures authenticity
          of results from tests and analysis of Products and maintain integrity
          and discipline to sustain customers trusts and confidence for the
          certified by the PNHCL Halal Products made by Filipino Manufacturers
          and exported from the Philippines to the global markets.
        </p>

        <p className="measure-wide ">
          The PNHLSC is equipped with state of the art laboratory equipment
          indispensable to determine the genuineness of Halal Products and can
          guarantee that its certified Halal Products of the manufacturers being
          supplied to the local and international consumers are authentic and
          free from adulteration and critical ingredients.
        </p>

        <p className="measure-wide">
          The PNHLSC is the main source of science and technology on Halal that
          can assist Halal patrons, practitioner, scientists and technologists
          including researchers and the academe and those that vested their
          interest upon Halal for their economic prosperity and physical
          wellness and improvements.
        </p>

        <h4>Our Mandate</h4>

        <p className="measure-wide">
          The Philippine National Halal Centre and Laboratory is mandated to
          coordinate science and technology on Halal and ensure that the results
          therefrom will be utilized for the maximum benefits of the producers
          and consumers of Halal products.
        </p>
        <h4 className="sec-headright">Our Vision</h4>

        <p className="measure-wide">
          The Philippine National Halal Centre and Laboratory will be the main
          passport of Halal Industry Products for both local and international
          consumers and the source of Halal knowledge for scientists,
          researchers and practitioners.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
