import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import "./HandelAmount.css";

const HandelAmount = ({ handelClickUp, handelClickDown, amountStuff }) => {
  return (
    <div>
      <span className="countContaner">
        <IconButton onClick={() => handelClickUp()}>
          <AddCircleOutlineIcon />
        </IconButton>
        <input value={amountStuff} size="4" className="countStuff" />
        <IconButton onClick={() => handelClickDown()}>
          <RemoveCircleOutlineIcon />
        </IconButton>
      </span>
    </div>
  );
};

export default HandelAmount;
