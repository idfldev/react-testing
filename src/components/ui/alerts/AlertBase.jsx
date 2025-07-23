import React, { Children } from 'react'

const AlertBase = ({
   customStyles = "bg-white",
   notificationStyles = "text-gray-600",
   dismissAction,
   dismissStyles = "text-gray-300 hover:text-gray-600",
   title,
   notificationString,
   Children = null
}) => {
   return (
      <div
         className={`${customStyles} relative top-10 shadow-md rounded-lg p-4 max-w-md mx-auto`}
      >
         <div className="flex items-center">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="size-6 text-green-600"
            >
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
               />
            </svg>
            <h2 className="ml-5 font-bold">{title}</h2>
            <button
               onClick={dismissAction}
               className={`ml-auto px-4 py-2 rounded-lg transition-all ${dismissStyles}`}
            >
               X
            </button>
         </div>
         <p className={`${notificationStyles} ml-12 mb-5 `}>
            {notificationString}
         </p>
         {Children}
      </div>
   );
};

export default AlertBase;
