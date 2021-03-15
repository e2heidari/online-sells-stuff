import { createContext, useReducer } from "react";
import { stuffReducer, sumItems } from "./stuffReducer";

export const StuffContext = createContext();

const storage = localStorage.getItem("CartItems")
  ? JSON.parse(localStorage.getItem("CartItems"))
  : [];

const initialState = {
  cart: storage,
  ...sumItems(storage),
};

const StuffContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stuffReducer, initialState);
  const handelClickUp = (payload) => {
    dispatch({ type: "HANDELCLICKUP", payload });
  };
  const handelClickDown = (payload) => {
    dispatch({ type: "HANDELCLICKDOWN", payload });
  };
  const addCart = (payload) => {
    dispatch({ type: "ADD", payload });
    // Load local storage
    // Add new item
    // Save it to local storage
  };
  const removeStuff = (payload) => {
    dispatch({ type: "REMOVE", payload });
  };
  return (
    <StuffContext.Provider
      value={{ handelClickDown, handelClickUp, addCart, removeStuff, state }}
    >
      {children}
    </StuffContext.Provider>
  );
};

export default StuffContextProvider;
