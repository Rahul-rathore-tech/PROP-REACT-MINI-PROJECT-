import React from "react";
import Common from "./Common";
import reactlogo from "./img/react-logo.png";
const Home = () => {
  return (
    <>
      <Common
        name="Make Website in "
        imgsrc={reactlogo}
        visit="/service"
        btnname="Learn Now"
      />
    </>
  );
};

export default Home;
