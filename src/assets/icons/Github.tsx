import { ReactElement } from "react";

export const Github = ({
  link,
  ...props
}: {
  link: string
}): ReactElement => {
  return (
    <a href={link} target='_blank' rel="noreferrer">
      <svg
        {...props}
        width="30"
        height="32"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4453 0.5C9.25502 0.5 0.990234 8.76325 0.990234 18.955C0.990234 27.1091 6.2776 34.0267 13.6119 36.4673C14.5332 36.6381 14.8315 36.066 14.8315 35.58V32.1443C9.69794 33.2608 8.62909 29.9666 8.62909 29.9666C7.78938 27.8335 6.57904 27.266 6.57904 27.266C4.90424 26.1202 6.70668 26.1448 6.70668 26.1448C8.55988 26.274 9.53492 28.0472 9.53492 28.0472C11.1805 30.8678 13.8519 30.0527 14.9053 29.5805C15.0699 28.3886 15.5482 27.5736 16.0772 27.1137C11.9787 26.6446 7.66942 25.0621 7.66942 17.9923C7.66942 15.9761 8.39071 14.3305 9.57029 13.0387C9.37959 12.5727 8.7475 10.6949 9.75023 8.15423C9.75023 8.15423 11.3005 7.65902 14.8269 10.0459C16.2987 9.63679 17.8766 9.43224 19.4453 9.42455C21.014 9.43224 22.5934 9.63679 24.0683 10.0459C27.5916 7.65902 29.1388 8.15423 29.1388 8.15423C30.1431 10.6964 29.511 12.5742 29.3203 13.0387C30.5045 14.3305 31.2196 15.9776 31.2196 17.9923C31.2196 25.0806 26.9027 26.6416 22.7933 27.0983C23.4546 27.6704 24.059 28.7931 24.059 30.5156V35.58C24.059 36.0706 24.3543 36.6473 25.2909 36.4658C32.6191 34.0221 37.9003 27.106 37.9003 18.955C37.9003 8.76325 29.6371 0.5 19.4453 0.5Z"
        />
      </svg>
    </a>
  );
};

Github.defaultProps = {
  link: 'https://github.com/RodrigoEC/PlaneJa'
}
