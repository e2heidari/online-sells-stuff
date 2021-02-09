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
        <h1 className="header">SHOPING CART</h1>
          <hr/>
          <h1 className="secondHeader">My Cart</h1>
          <hr/>
          <div className="cartStuffContainer">
        {cartStuff}
        </div>
        
      </div>
    );
  }
  export default Cart;
