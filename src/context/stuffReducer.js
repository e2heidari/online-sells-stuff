const Storage = (cart) => {
  localStorage.setItem(
    "CartItems",
    JSON.stringify(cart.length > 0 ? cart : [])
  );
};

export const sumItems = (cart) => {
  Storage(cart);
  let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
  // let withQuantityPrice = itemCount * cart.price;
  let totalPrice = cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, totalPrice };
};

export const stuffReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
      };
    case "REMOVE":
      state.cart.splice(action.payload.index, 1);

      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
      };
    case "HANDELCLICKUP":
      state.cart[state.cart.findIndex((item) => item.id === action.payload.id)]
        .quantity++;

      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
      };
    case "HANDELCLICKDOWN":
      state.cart[state.cart.findIndex((item) => item.id === action.payload.id)]
        .quantity--;
      if (
        state.cart[
          state.cart.findIndex((item) => item.id === action.payload.id)
        ].quantity-- <= 0
      ) {
        state.cart[
          state.cart.findIndex((item) => item.id === action.payload.id)
        ].quantity = 1;
      }
      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
      };
    default:
      return state;
  }
};
