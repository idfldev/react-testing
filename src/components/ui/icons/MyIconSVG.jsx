// MyIconSVG.jsx

import React from "react";

// Error Icon (Dấu chấm than trong vòng tròn đỏ)
export const ErrorIcon = ({ color = "#FF4D4F", size = 24 }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
   </svg>
);

// Warning Icon (Dấu chấm than trong tam giác vàng)
export const WarningIcon = ({ color = "#FAAD14", size = 24 }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
   </svg>
);

// Info Icon (Chữ "i" trong vòng tròn xanh dương)
export const InfoIcon = ({ color = "#1890FF", size = 24 }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
   </svg>
);

// Success Icon (Dấu tích trong vòng tròn xanh lá)
export const SuccessIcon = ({ color = "#52C41A", size = 24 }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 15 15 9" />
   </svg>
);

// Network Alert Icon (Biểu tượng sóng mạng)
export const NetworkIcon = ({ color = "#13C2C2", size = 24 }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <line x1="12" y1="2" x2="12" y2="10" />
      <line x1="12" y1="14" x2="12" y2="22" />
      <line x1="6" y1="6" x2="6" y2="18" />
      <line x1="18" y1="6" x2="18" y2="18" />
   </svg>
);

// Security Alert Icon (Biểu tượng khóa)
export const SecurityIcon = ({ color = "#722ED1", size = 24 }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
   </svg>
);

// Update Alert Icon (Biểu tượng mũi tên xoay)
export const UpdateIcon = ({ color = "#FFA940", size = 24 }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="M12 20v-6m0 0l-4-4m4 4l4-4" />
      <path d="M12 4v6m0 0l-4 4m4-4l4 4" />
   </svg>
);
