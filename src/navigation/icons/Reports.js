import React from "react";

const Reports = ({ size, strokeWidth }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "22"}
      height={size ?? "23"}
      viewBox="0 0 22 23"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M8.25016 5.26294H6.41683C5.40431 5.26294 4.5835 6.08375 4.5835 7.09627V18.0963C4.5835 19.1088 5.40431 19.9296 6.41683 19.9296H15.5835C16.596 19.9296 17.4168 19.1088 17.4168 18.0963V7.09627C17.4168 6.08375 16.596 5.26294 15.5835 5.26294H13.7502"
        strokeWidth={strokeWidth ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="8.25"
        y="3.42969"
        width="5.5"
        height="3.66667"
        rx="1.83333"
        strokeWidth={strokeWidth ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.1665 13.513H12.8332"
        strokeWidth={strokeWidth ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9998 11.6797V15.3464"
        strokeWidth={strokeWidth ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reports;
