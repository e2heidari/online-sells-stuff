import React, { useContext } from "react";
import "./Cart.css";
import CartStuff from "./CartStuff";
import { StuffContext } from "../../context/StuffContext";

function Cart() {
  const x = useContext(StuffContext);
  console.log(x);
  const { state } = x;
  const cartStuff = state.cart.map((myStuff) => (
    <CartStuff key={myStuff.id} myStuff={myStuff} />
  ));
  return (
    <div className="mainContainer">
      <h1 className="header">SHOPING CART</h1>
      <hr />
      <h1 className="secondHeader">My Cart</h1>
      <hr />
      <div className="cartStuffContainer">{cartStuff}</div>
      <div className="footer">
        <h2 className="totalPrice">total price: ${state.totalPrice}</h2>
      </div>
    </div>
  );
}
export default Cart;
