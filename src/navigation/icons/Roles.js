import React from "react";

const Roles = ({ size }) => {
  return (
    <svg
      width={size ?? "22"}
      height={size ?? "23"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="8.24992"
        cy="7.09635"
        rx="3.66667"
        ry="3.66667"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 19.9297V18.0964C2.75 16.0713 4.39162 14.4297 6.41667 14.4297H10.0833C12.1084 14.4297 13.75 16.0713 13.75 18.0964V19.9297"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 10.763L16.5001 12.5964L20.1667 8.92969"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Roles;
