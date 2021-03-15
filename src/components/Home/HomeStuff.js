import React, { useContext } from "react";
import "./HomeStuff.css";
import Button from "@material-ui/core/Button";
import { StuffContext } from "../../context/StuffContext";

const HomeStuff = ({ product }) => {
  const { addCart } = useContext(StuffContext);
  return (
    <div className="container">
      <h2 className="item-aH">{product.title}</h2>
      <img className="item-bH" src={product.imageUrl} alt={product.title}></img>
      <h3 className="item-cH">{product.stuffExplanation}</h3>
      {/* <img className="item-f" alt="Like"></img> */}
      <Button
        className="item-dH"
        variant="contained"
        color="primary"
        onClick={() => addCart(product)}
      >
        Add to Cart
      </Button>
      <h4 className="item-eH">Price: ${product.price}</h4>
    </div>
  );
};
export default HomeStuff;
