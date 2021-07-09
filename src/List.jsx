import React from "react";

function List() {
  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/250/300";
  const img3 = "https://picsum.photos/300/300";
  const link = "https://google.com";
  return (
    <div className="img-div">
      <img src={img1} alt="randomImages" />
      <img src={img2} alt="randomImages" />
      <a href={link} target="_blank">
        <img src={img3} alt="randomImages" />
      </a>
    </div>
  );
}
export default List;
