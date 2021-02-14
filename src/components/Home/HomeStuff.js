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
      <h2 className="item-a">{title}</h2>
      <img className="item-b" src={imageUrl} alt={title}></img>
      <h3 className="item-c">{stuffExplanation}</h3>
      {/* <img className="item-f" alt="Like"></img> */}
      <Button
        className="item-d"
        variant="contained"
        color="primary"
        onClick={() =>
          addCart({ id, title, imageUrl, stuffExplanation, price })
        }
      >
        Add to Cart
      </Button>
      <h4 className="item-e">Price: ${price}</h4>
    </div>
  );
};
export default HomeStuff;
