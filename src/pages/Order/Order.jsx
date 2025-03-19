import React, { useState } from "react";
import Order from "../../components/order/Order";
import { useCart } from "../../context/CartContext";
import "./Order.css"; // Import the CSS file here

const OrderForm = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [1, 2, 3, 4];

  const getStepClass = (step) => {
    const baseClass =
      "w-[45px] h-[45px] text-lg flex justify-center items-center rounded-full";
    return step === activeStep
      ? `${baseClass} bg-[#feb6bb] shadow-xl`
      : `${baseClass} shadow-inner shadow-slate-300`;
  };

  return (
    <div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {/* Render step */}
            <div className={`step ${step === activeStep ? "active" : "inactive"}`}>
              {step}
            </div>
            {/* Render separator line except after the last step */}
            {index < steps.length - 1 && <span className="step-separator"></span>}
          </React.Fragment>
        ))}
      </div>
      <Order />
    </div>
  );
};

export default OrderForm;
