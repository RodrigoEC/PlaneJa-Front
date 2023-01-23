import { ReactElement, SVGProps } from "react";

export const Arrow = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      width="23"
      height="15"
      viewBox="0 0 23 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.7071 8.13893C23.0976 7.7484 23.0976 7.11524 22.7071 6.72471L16.3431 0.360754C15.9526 -0.0297699 15.3195 -0.0297698 14.9289 0.360755C14.5384 0.751279 14.5384 1.38444 14.9289 1.77497L20.5858 7.43182L14.9289 13.0887C14.5384 13.4792 14.5384 14.1124 14.9289 14.5029C15.3195 14.8934 15.9526 14.8934 16.3431 14.5029L22.7071 8.13893ZM8.74228e-08 8.43182L22 8.43182L22 6.43182L-8.74228e-08 6.43182L8.74228e-08 8.43182Z"
      />
    </svg>
  );
};
