import React from "react";
import Common from "./Common";
import webabout from "./img/webabout.jpg";
const About = () => {
  return (
    <>
      <Common
        name="Welcome To About Page"
        imgsrc={webabout}
        visit="/service"
        btnname="View More"
      />
    </>
  );
};

export default About;
