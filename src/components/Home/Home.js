import React from "react";
import HomeStuff from "./HomeStuff.js";
import stuffData from "./data.json";
import "./Home.css";

function Home({ addCart }) {
  const components = stuffData.map((data) => (
    <HomeStuff key={data.id} {...data} addCart={addCart} />
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
