import React, { useState } from "react";
import Plan from "./Plan";
import "../Style/Form.css"

function Form() {
  const [selectedPlan, setSelectedPlan] = useState("12 Months Subscription");
  const plans = [
    {
      plan: "12 Months Subscription",
      price: "₹179",
      monthly: "₹15",
      discount: "- ₹18,321",
      recommend: <div className="tag2">Recommended</div>,
    },
    {
      plan: "6 Months Subscription",
      price: "₹149",
      monthly: "₹25",
      discount: "- ₹18,351",
    },
    {
      plan: "3 Months Subscription",
      price: "₹99",
      monthly: "₹33",
      discount: "- ₹18,401",
    },
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="form">

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="stage-1">
          <div className="blu-cir">
            <p>1</p>
          </div>
          <p className="stage-text">Sign Up</p>
        </div>
        <div className="stage-1">
          <div className="blu-cir">
            <p>2</p>
          </div>
          <p className="stage-text">Subscribe</p>
        </div>
      </div>

      {/* Heading */}
      <h2 className="prog-title">Select your subcription plan</h2>

      {/* Input Container */}
      <div className="input-container">

        {/* Expired Plan */}
        <div className="expire-option">
          {/*<div className="expire-tag">Offer expired</div>*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M4.63541 21.3037L4.63559 21.3041C5.28716 22.815 6.16685 24.1194 7.27378 25.2263C8.3807 26.3332 9.68505 27.2129 11.196 27.8645L11.1964 27.8647C12.688 28.5087 14.2858 28.8334 16 28.8334C17.7142 28.8334 19.312 28.5087 20.8036 27.8647L20.804 27.8645C22.315 27.2129 23.6193 26.3332 24.7262 25.2263C25.8332 24.1194 26.7128 22.815 27.3644 21.3041L27.3646 21.3037C28.0086 19.8121 28.3333 18.2143 28.3333 16.5001C28.3333 14.7859 28.0086 13.1881 27.3646 11.6965L27.3644 11.6961C26.7128 10.1851 25.8332 8.88078 24.7262 7.77386C23.6193 6.66694 22.315 5.78679 20.804 5.13434L4.63541 21.3037ZM4.63541 21.3037C3.99138 19.8121 3.66667 18.2143 3.66667 16.5001C3.66667 14.7859 3.99138 13.1881 4.63541 11.6965L4.63559 11.6961M4.63541 21.3037L4.63559 11.6961M4.63559 11.6961C5.28716 10.1851 6.16685 8.88078 7.27378 7.77386M4.63559 11.6961L7.27378 7.77386M7.27378 7.77386C8.3808 6.66684 9.68529 5.78663 11.1964 5.13416M7.27378 7.77386L11.1964 5.13416M11.1964 5.13416C12.688 4.49102 14.2858 4.16675 16 4.16675M11.1964 5.13416L16 4.16675M16 4.16675C17.7142 4.16675 19.312 4.49102 20.8036 5.13416L16 4.16675Z"
              stroke="#BEBEBE"
              stroke-width="2"
            />
            <path
              d="M16 24.5C14.8933 24.5 13.8533 24.2899 12.88 23.8696C11.9067 23.4499 11.06 22.88 10.34 22.16C9.62 21.44 9.05013 20.5933 8.6304 19.62C8.21013 18.6467 8 17.6067 8 16.5C8 15.3933 8.21013 14.3533 8.6304 13.38C9.05013 12.4067 9.62 11.56 10.34 10.84C11.06 10.12 11.9067 9.54987 12.88 9.1296C13.8533 8.70987 14.8933 8.5 16 8.5C17.1067 8.5 18.1467 8.70987 19.12 9.1296C20.0933 9.54987 20.94 10.12 21.66 10.84C22.38 11.56 22.9499 12.4067 23.3696 13.38C23.7899 14.3533 24 15.3933 24 16.5C24 17.6067 23.7899 18.6467 23.3696 19.62C22.9499 20.5933 22.38 21.44 21.66 22.16C20.94 22.88 20.0933 23.4499 19.12 23.8696C18.1467 24.2899 17.1067 24.5 16 24.5Z"
              fill="#BEBEBE"
            />
          </svg>

          <div className="expire-opt-container">
            <p>12 Months Subscription</p>
            <div className="right-text">
              <p>
                Total <b>₹ 99</b>{" "}
              </p>
              <p>₹8 /mo</p>
            </div>
          </div>
        </div>


        {/* Plans */}
        <div className="payment-cards">
          {plans.map((p) => (
            <Plan
              key={p.plan}
              plan={p.plan}
              price={p.price}
              monthly={p.monthly}
              recommend={p.recommend}
              isActive={selectedPlan === p.plan}
              handlePlanClick={() => handlePlanClick(p.plan)}
            />
          ))}
        </div>

      </div>


      {/* Summary */}
      <div className="summary-container">
        <div className="text-container">
          <p>Subscription Fee</p>
          <b>₹18,500</b>
        </div>
        <div className="alert">
          <div className="alert-header">
            <p>Limited time offer</p>
            <b>{plans.find((p) => p.plan === selectedPlan)?.discount}</b>
          </div>
          <div className="alert-body">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                  fill="#DE4313"
                />
              </svg>
            </span>
            <p>Offer valid till 18th July 2023 </p>
          </div>
        </div>
        <div className="text-container">
          <b>
            Total <span>(Incl. of 18% GST)</span>{" "}
          </b>
          <b className="right-txt">
            {plans.find((p) => p.plan === selectedPlan)?.price}
          </b>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="secondary-btn hover">CANCEL</button>
          <button className="primary-btn hover">PROCEED TO PAY</button>
        </div>
      </div>


      {/* Icon */}
      <div className="icon-container">
        <div className="frame"></div>
      </div>
    </div>
  );
}

export default Form;
