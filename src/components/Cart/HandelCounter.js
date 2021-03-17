import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import "./HandelAmount.css";
import { StuffContext } from "../../context/StuffContext";

const HandelCounter = ({ product, quantity }) => {
  const { handelClickUp, handelClickDown } = useContext(StuffContext);
  return (
    <div>
      <span className="countContaner">
        <IconButton onClick={() => handelClickUp(product)}>
          <AddCircleOutlineIcon />
        </IconButton>
        <input value={quantity} size="4" />
        <IconButton onClick={() => handelClickDown(product)}>
          <RemoveCircleOutlineIcon />
        </IconButton>
      </span>
    </div>
  );
};

export default HandelCounter;
