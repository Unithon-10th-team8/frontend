type Props = {
  isActive?: boolean;
};

export const IconNavHome = ({ isActive = false }: Props) => {
  const fillColor = isActive ? "#ffffff" : "#565656";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_44_1266)">
        <path
          d="M13.228 2.688C12.8769 2.4149 12.4448 2.26662 12 2.26662C11.5552 2.26662 11.1231 2.4149 10.772 2.688L2.388 9.208C1.636 9.795 2.05 11 3.003 11H4V19C4 19.5304 4.21071 20.0391 4.58578 20.4142C4.96086 20.7893 5.46956 21 6 21H10V15C10 14.4696 10.2107 13.9609 10.5858 13.5858C10.9609 13.2107 11.4696 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15V21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V11H20.997C21.949 11 22.365 9.795 21.612 9.209L13.228 2.688Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_44_1266">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
