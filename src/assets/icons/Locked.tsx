import { ReactElement } from "react";

export const Locked = ({ ...props }): ReactElement => {
  return (
    <svg
      width="18"
      height="24"
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 10V6C15 2.687 12.313 0 9 0C5.687 0 3 2.687 3 6V10H0V24H18V10H15ZM5 10V6C5 3.794 6.794 2 9 2C11.206 2 13 3.794 13 6V10H5Z"
      />
    </svg>
  );
};