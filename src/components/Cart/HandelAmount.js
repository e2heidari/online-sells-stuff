import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./HandelAmount.css";

const HandelAmount = ({ price }) => {
  const [amountStuff, setAmountStuff] = useState(1);
  return (
    <div>
      <span className="countContaner">
        <IconButton>
          <ExpandLessIcon />
        </IconButton>
        <input value={amountStuff} size="4" className="countStuff" />
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </span>
      ${price}
    </div>
  );
};

export default HandelAmount;
