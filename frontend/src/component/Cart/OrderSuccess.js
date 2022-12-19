import React from "react";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <AiFillCheckCircle />
      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
