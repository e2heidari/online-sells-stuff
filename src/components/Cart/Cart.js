import React from "react";
import "./Cart.css";
import CartStuff from "./CartStuff";

function Cart({ removeStuff, cart }) {
  const cartStuff = cart.map((myStuff, index) => (
    <CartStuff
      key={myStuff.id}
      index={index}
      {...myStuff}
      removeStuff={removeStuff}
    />
  ));
  const allPrice = cart.map((stuff) => Number(stuff.price));
  const totalPrice = allPrice.reduce((a, b) => a + b, 0);
  console.log(allPrice);

  return (
    <div className="mainContainer">
      <h1 className="header">SHOPING CART</h1>
      <hr />
      <h1 className="secondHeader">My Cart</h1>
      <hr />
      <div className="cartStuffContainer">{cartStuff}</div>
      <div className="footer">
        <h2 className="totalPrice">total price: ${totalPrice}</h2>
      </div>
    </div>
  );
}
export default Cart;
