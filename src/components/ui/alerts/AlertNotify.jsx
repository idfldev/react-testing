import React, { Children } from "react";

const AlertNotify = ({
   icons,
   classnameCard = "bg-white",
   classnameText = "text-gray-600",
   title,
   classnameTitle="text-red-800",
   text,
}) => {
   return (
      <div
         className={`${classnameCard} relative top-10 shadow-md rounded-lg p-4 max-w-md mx-auto`}
      >
         <div className="flex items-center">
            {icons}
            <p className={`${classnameTitle} ml-2 font-bold`}>{title}</p>
         </div>
         <p className={`${classnameText} mb-2 `}>
            {text}
         </p>
      </div>
   );
};

export default AlertNotify;
