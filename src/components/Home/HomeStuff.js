import React from "react";
import "./HomeStuff.css";
import Button from "@material-ui/core/Button";

const HomeStuff = ({ title, imageUrl, stuffExplanation, addCart }) => {
  return (
    <div className="container">
      <h2 className="item-a">{`${title}`}</h2>
      <img className="item-b" src={imageUrl} alt={`${title}`}></img>
      <h3 className="item-c">{`${stuffExplanation}`}</h3>
      {/* <img className="item-f" alt="Like"></img> */}
      <Button
        className="item-d"
        variant="contained"
        color="primary"
        onClick={() => addCart({ title, imageUrl, stuffExplanation })}
      >
        Add to Cart
      </Button>
    </div>
  );
};
export default HomeStuff;
