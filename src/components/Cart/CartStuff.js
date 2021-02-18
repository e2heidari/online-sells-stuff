import React, { useEffect, useState } from "react";
import "./CartStuff.css";
import Button from "@material-ui/core/Button";
import HandelAmount from "./HandelAmount";

const CartStuff = ({
  id,
  title,
  imageUrl,
  stuffExplanation,
  price,
  index,
  removeStuff,
}) => {
  const [amountStuff, setAmountStuff] = useState(1);
  const handelClickUp = () => {
    setAmountStuff(amountStuff + 1);
  };
  const handelClickDown = () => {
    setAmountStuff(amountStuff - 1);
    if (amountStuff <= 1) {
      setAmountStuff(1);
    }
  };
  const [priceWithAmount, setPriceWithAmount] = useState(price);
  useEffect(() => {
    setPriceWithAmount(amountStuff * price);
  }, [amountStuff]);

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
        onClick={() => removeStuff(index)}
      >
        Remove from Cart
      </Button>
      <h1 className="item-e">${price}</h1>
      <div className="item-f">
        <HandelAmount
          handelClickUp={handelClickUp}
          handelClickDown={handelClickDown}
          amountStuff={amountStuff}
        />
      </div>
      <h1 className="item-g">${priceWithAmount}</h1>
    </div>
  );
};
export default CartStuff;
