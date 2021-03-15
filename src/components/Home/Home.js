import React from "react";
import HomeStuff from "./HomeStuff";
import stuffData from "./data.json";
import "./Home.css";

function Home() {
  const components = stuffData.map((data) => (
    <HomeStuff key={data.id} product={data} />
  ));
  return (
    <div className="mainContainer">
      <h1 className="header">Add your stuffs in cart</h1>
      <hr />
      <div className="stuffContainer">{components}</div>
    </div>
  );
}
export default Home;
