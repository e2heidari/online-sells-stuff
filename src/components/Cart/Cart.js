import React from "react";
import "./Cart.css"
import CartStuff from "./CartStuff"

function Cart({removeStuff, cart} ) {
    const cartStuff = cart.map((myStuff, index) => (
      <CartStuff key={myStuff.id} index={index} {...myStuff} removeStuff={removeStuff} />
    ));
    console.log(cartStuff)
    return (
      <div className="mainContainer">
        <h1 className="header">Your stuff(s) in cart</h1>
        {cartStuff}
      </div>
    );
  }
  export default Cart;
