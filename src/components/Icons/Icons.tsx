interface IconProps {
  isFavorite?: boolean;
  className?: string;
}

export const CheckIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // fill-rule="evenodd"
        // clip-rule="evenodd"
        d="M2.5 5L0 7.5L7.5 15L20 2.5L17.5 0L7.5 10L2.5 5Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};

export const ArrowIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6218 0.860936C12.5449 0.314027 12.0392 -0.0670213 11.4923 0.00984164L2.57991 1.2624C2.033 1.33926 1.65196 1.84493 1.72882 2.39184C1.80568 2.93875 2.31135 3.3198 2.85826 3.24294L10.7804 2.12955L11.8938 10.0517C11.9707 10.5986 12.4763 10.9797 13.0232 10.9028C13.5701 10.8259 13.9512 10.3203 13.8743 9.77335L12.6218 0.860936ZM1.59746 15.9774L12.4301 1.60193L10.8329 0.398295L0.000192702 14.7737L1.59746 15.9774Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};
export const ArrowRightIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7339 7.94643C19.1176 7.54915 19.1065 6.91608 18.7093 6.53243L12.2352 0.28051C11.8379 -0.103139 11.2048 -0.0920886 10.8212 0.305192C10.4375 0.702472 10.4486 1.33554 10.8459 1.71919L16.6006 7.27646L11.0433 13.0312C10.6597 13.4285 10.6707 14.0615 11.068 14.4452C11.4653 14.8288 12.0984 14.8178 12.482 14.4205L18.7339 7.94643ZM0.0347864 8.56577L18.032 8.25162L17.9971 6.25193L-0.000118444 6.56607L0.0347864 8.56577Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};
export const CloseIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 8L8 24"
        stroke="#11101C"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 8L24 24"
        stroke="#11101C"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const HeartIcon = ({ isFavorite, className }: IconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z"
        // Якщо обрано — заливаємо червоним, якщо ні — прозорим
        fill={isFavorite ? "#F03F3B" : "none"}
        // Якщо обрано — контур червоний, якщо ні — темний
        stroke={isFavorite ? "#F03F3B" : "#11101C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeOpenIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_31_2517)">
        <path
          d="M0.833252 10.0002C0.833252 10.0002 4.16659 3.3335 9.99992 3.3335C15.8333 3.3335 19.1666 10.0002 19.1666 10.0002C19.1666 10.0002 15.8333 16.6668 9.99992 16.6668C4.16659 16.6668 0.833252 10.0002 0.833252 10.0002Z"
          stroke="#11101C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke="#11101C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_2517">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EyeCloseIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_31_2514)">
        <path
          d="M14.9499 14.9502C13.5254 16.036 11.7908 16.6376 9.99992 16.6668C4.16659 16.6668 0.833252 10.0002 0.833252 10.0002C1.86983 8.06843 3.30753 6.38069 5.04992 5.05018M8.24992 3.53352C8.82353 3.39925 9.41081 3.33213 9.99992 3.33352C15.8333 3.33352 19.1666 10.0002 19.1666 10.0002C18.6607 10.9465 18.0575 11.8375 17.3666 12.6585M11.7666 11.7668C11.5377 12.0125 11.2617 12.2095 10.955 12.3461C10.6484 12.4828 10.3173 12.5562 9.98166 12.5622C9.64599 12.5681 9.31256 12.5063 9.00126 12.3806C8.68997 12.2549 8.40719 12.0677 8.16979 11.8303C7.9324 11.5929 7.74525 11.3101 7.61951 10.9988C7.49377 10.6875 7.43202 10.3541 7.43795 10.0184C7.44387 9.68276 7.51734 9.35172 7.65398 9.04506C7.79062 8.73839 7.98763 8.46239 8.23325 8.23352"
          stroke="#11101C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.833252 0.833496L19.1666 19.1668"
          stroke="#11101C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_2514">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LocationIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_31_2509)">
        <path
          d="M14 6.66651C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.66651C2 5.07521 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.07521 14 6.66651Z"
          stroke="#11101C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
          stroke="#11101C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_2509">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const StarIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.88965 4.12598C9.0488 4.42749 9.33887 4.6381 9.6748 4.69629L13.4746 5.35254L10.7871 8.12012C10.5496 8.36469 10.4388 8.7055 10.4873 9.04297L11.0361 12.8604L7.5752 11.1592L7.45801 11.1094C7.21993 11.0248 6.95976 11.0248 6.72168 11.1094L6.60449 11.1592L3.14258 12.8604L3.69238 9.04297C3.74091 8.7055 3.6301 8.36469 3.39258 8.12012L0.704102 5.35254L4.50488 4.69629C4.84082 4.6381 5.13088 4.42749 5.29004 4.12598L7.08984 0.714844L8.88965 4.12598Z"
        fill="#FFC531"
        stroke="#FFC531"
        stroke-width="1.2"
      />
    </svg>
  );
};

export const UserIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
        fill="#F03F3B"
      />
    </svg>
  );
};

export const ArrowDownIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#FBFBFB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TimeIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_31_2391)">
        <path
          d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z"
          stroke="#11101C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 5V10L13.3333 11.6667"
          stroke="#11101C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_2391">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
