import { Step, StepLabel, Stepper } from "@mui/material";
import React, { Fragment } from "react";
import "./CheckoutSteps.css";
import { Typography } from "@mui/material";
import { MdPayments } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { AiFillCheckSquare } from "react-icons/ai";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <MdLocalShipping />,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <AiFillCheckSquare />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <MdPayments />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
    marginTop: "30px",
  };
  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                fontSize: "30px",
                color: activeStep >= index ? "#F85F68" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckoutSteps;
