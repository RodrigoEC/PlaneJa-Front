import { ReactElement } from "react";

export const Unlocked = ({ ...props }): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_162_1082)">
        <path
          d="M12 10V6C12 2.687 9.313 0 6 0C2.687 0 0 2.687 0 6V9H2V6C2 3.794 3.794 2 6 2C8.206 2 10 3.794 10 6V10H6V24H24V10H12Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_162_1082">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
