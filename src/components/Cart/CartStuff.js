import React from "react";
import "./CartStuff.css"

const CartStuff = ({ title, imageUrl, stuffExplanation, price }) => {
  console.log(title)
    return (
      <div className="container">
        <h2 className="item-a">{title}</h2>
        <img className="item-b" src={imageUrl} alt={title}></img>
        <h3 className="item-c">{stuffExplanation}</h3>
        {/* <img className="item-f" alt="Like"></img> */}
        {/* <Button
          className="item-d"
          variant="contained"
          color="primary"
          onClick={() => addCart({ title, imageUrl, stuffExplanation, price })}
        >
          Add to Cart
        </Button> */}
      </div>
    );
  };
export default CartStuff;
