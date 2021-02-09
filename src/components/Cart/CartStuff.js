import React from "react";
import "./CartStuff.css"
import Button from "@material-ui/core/Button";


const CartStuff = ({id, title, imageUrl, stuffExplanation, price, index, removeStuff }) => {
  console.log(title)
    return (
      <div className="container">
        <h2 className="item-a">{title}</h2>
        <img className="item-b"  src={imageUrl} alt={title}></img>
        <h3 className="item-c">{stuffExplanation}</h3>
        {/* <img className="item-f" alt="Like"></img> */}
        <Button
          className="item-d"
          variant="contained"
          color="primary"
          onClick={() => removeStuff(index)}
        >
          Remove from Cart
        </Button>
      </div>
    );
  };
export default CartStuff;
