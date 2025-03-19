import React, { useState } from "react";
import Order from "../../components/order/Order";

const OrderForm = () => {
  const [activeStep, setActiveStep] = useState(1); // Track the active step dynamically

  const steps = [1, 2, 3, 4]; // Array of steps
  const getStepClass = (step) => {
    const baseClass =
      "w-[45px] h-[45px] text-lg flex justify-center items-center rounded-full";
    return step === activeStep
      ? `${baseClass} bg-[#feb6bb] shadow-xl` // Active step styles
      : `${baseClass} shadow-inner shadow-slate-300`; // Inactive step styles
  };

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {/* Render step */}
            <div className={getStepClass(step)}>{step}</div>
            {/* Render separator line except after the last step */}
            {index < steps.length - 1 && (
              <span className="w-[50px] h-[1px] bg-black mx-2"></span>
            )}
          </React.Fragment>
        ))}
      </div>
      <Order />
    </div>
  );
};

export default OrderForm;
