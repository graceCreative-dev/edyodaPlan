import React from "react";

function Plan({ plan, price, monthly, recommend, isActive, handlePlanClick }) {
  return (
    <>
      <div
        className={`option ${isActive ? "active" : ""}`}
        onClick={handlePlanClick}
      >

        {/* Conditional Radio Button*/}
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M14.1333 22.6334L23.5333 13.2334L21.6667 11.3667L14.1333 18.9001L10.3333 15.1001L8.46667 16.9667L14.1333 22.6334ZM16 29.8334C14.1556 29.8334 12.4222 29.4832 10.8 28.7827C9.17778 28.0832 7.76667 27.1334 6.56667 25.9334C5.36667 24.7334 4.41689 23.3223 3.71733 21.7001C3.01689 20.0779 2.66667 18.3445 2.66667 16.5001C2.66667 14.6556 3.01689 12.9223 3.71733 11.3001C4.41689 9.67786 5.36667 8.26675 6.56667 7.06675C7.76667 5.86675 9.17778 4.91653 10.8 4.21608C12.4222 3.51653 14.1556 3.16675 16 3.16675C17.8444 3.16675 19.5778 3.51653 21.2 4.21608C22.8222 4.91653 24.2333 5.86675 25.4333 7.06675C26.6333 8.26675 27.5831 9.67786 28.2827 11.3001C28.9831 12.9223 29.3333 14.6556 29.3333 16.5001C29.3333 18.3445 28.9831 20.0779 28.2827 21.7001C27.5831 23.3223 26.6333 24.7334 25.4333 25.9334C24.2333 27.1334 22.8222 28.0832 21.2 28.7827C19.5778 29.4832 17.8444 29.8334 16 29.8334Z"
              fill="#47BA68"
            />
          </svg>
        ) : (
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
          </svg>
        )}

        {/* Plan Container */}
        <div className="opt-container">

        {/* Plan Name */}
        <p className="plan-name">{plan}</p>

        <div className="opt-right-text">
          <p>
            Total <b>{price}</b>
          </p>
          <p>
            {monthly} /mo
          </p>
        </div>

        {/* Recommended Tag */}
        {/*{recommend}*/}

        </div>
      </div>
    </>
  );
}

export default Plan;
