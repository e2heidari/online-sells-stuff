import React from "react";
import "./HomeStuff.css";
import Button from "@material-ui/core/Button";

const HomeStuff = ({
  id,
  title,
  imageUrl,
  stuffExplanation,
  price,
  addCart,
}) => {
  return (
    <div className="container">
      <h2 className="item-aH">{title}</h2>
      <img className="item-bH" src={imageUrl} alt={title}></img>
      <h3 className="item-cH">{stuffExplanation}</h3>
      {/* <img className="item-f" alt="Like"></img> */}
      <Button
        className="item-dH"
        variant="contained"
        color="primary"
        onClick={() =>
          addCart({ id, title, imageUrl, stuffExplanation, price })
        }
      >
        Add to Cart
      </Button>
      <h4 className="item-eH">Price: ${price}</h4>
    </div>
  );
};
export default HomeStuff;
