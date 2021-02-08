import React from "react";
import HomeStuff from "./HomeStuff.js";
import stuffData from "./data.json";
import "./Home.css";

function Home({ addCart }) {
  const components = stuffData.map((data, index) => (
    <HomeStuff key={data.id} {...data} index={index} addCart={addCart} />
  ));
  return (
    <div className="mainContainer">
      <h1 className="header">Add your stuffs in cart</h1>
      {components}
    </div>
  );
}
export default Home;
