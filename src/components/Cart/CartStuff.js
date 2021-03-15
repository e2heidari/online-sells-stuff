import React, { useContext } from "react";
import "./CartStuff.css";
import Button from "@material-ui/core/Button";
import HandelCounter from "./HandelCounter";
import StuffContext from "../../context/StuffContext";

const CartStuff = ({ myStuff }) => {
  const { removeStuff } = useContext(StuffContext);

  return (
    <div className="container">
      <h2 className="item-a">{myStuff.title}</h2>
      <img className="item-b" src={myStuff.imageUrl} alt={myStuff.title}></img>
      <h3 className="item-c">{myStuff.stuffExplanation}</h3>
      {/* <img className="item-f" alt="Like"></img> */}
      <Button
        className="item-d"
        variant="contained"
        color="primary"
        onClick={() => removeStuff(myStuff)}
      >
        Remove from myStuff
      </Button>
      <h1 className="item-e">${myStuff.price}</h1>
      <HandelCounter key={myStuff.id} product={myStuff} />
      <div className="item-f"></div>
      {/* <h1 className="item-g">${withQuantityPrice}</h1> */}
    </div>
  );
};
export default CartStuff;
