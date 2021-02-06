import React from "react";
import "./Cart.css"
import CartStuff from "./CartStuff"

function Cart(props) {
    const cartstuff = Object.values(props).map((myStuff) => (
      <CartStuff key={myStuff.id} {...myStuff} />
    ));;
    console.log(cartstuff)
    return (
      <div className="mainContainer">
        <h1 className="header">Your stuffs in cart</h1>
        {cartstuff}
      </div>
    );
  }
  export default Cart;
