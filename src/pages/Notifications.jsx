import React from "react";
import { Helmet } from "react-helmet";

const Notifications = ({ count=0 }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center  "
    >
       <Helmet>
        <title>{`${count}-notification-productDeck`}</title>
        <meta name="description" content="impressive dahsboard  for new products" />
      </Helmet>
      <div className=" text-black text-xl py-3 px-6 rounded-lg shadow-lg flex items-center space-x-4 transition-opacity duration-300 ease-in-out opacity-100">
        <div className="flex-1">
        <p className="font-medium">
            {count === 0
              ? "You have no notifications." 
              : "You have a new notification!"}
          </p>
        </div>
        <button
          onClick={() => {}}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 9l5 5m0 0l5-5m-5 5L10 9m0 0L5 14m0 0l-5-5m5 5L10 9"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Notifications;
