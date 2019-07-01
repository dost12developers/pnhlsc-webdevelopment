import React from "react";
import Footer from "./Footer";
import Header from "./layout/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="pa2 pa5-ns">
        <iframe
          title="Philippine National Halal Laboratory and Science Center (PNHLSC)"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.269232860099!2d124.8188839710073!3d6.4875511111012925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f818d8a36ca2fb%3A0x99e83b68f13d07e2!2zNsKwMjknMTguOSJOIDEyNMKwNDknMDcuOCJF!5e0!3m2!1sen!2sph!4v1548988700827"
          className="w-100 h-100"
        />
        <p class="f4 lh-copy measure">
          Call:+ 064 421 2711
          <br /> <span>Monday-Friday (9am-5pm)</span>
        </p>
        <p class="f4 lh-copy measure">
          Email Address of the Regional Director:
          <br />
          zenaidalaidan.dost12@gmail.com
          <br />
        </p>
        <p class="f4 lh-copy measure">
          Location: Department of Science and Technology Region XII
          <br />
          Philippine National Halal Laboratory Science Center
          <br /> <span>Koronadal City, Philippines</span>
        </p>
        <br />
        <br /> <br /> <br /> <br />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
