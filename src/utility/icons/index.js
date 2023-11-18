export const RightSideIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <rect width="22" height="22" rx="6" fill="#FEF8E8" />
    <path
      d="M18.3334 5.49996H11.9167"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 11H10.0833"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3334 16.5H11.9167"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33341 7.33337L3.66675 11L7.33341 14.6667"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LeftSideIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <rect width="22" height="22" rx="6" fill="#FEF8E8" />
    <path
      d="M18.3333 5.49999H8.25"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 11H11.9167"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 16.5H8.25"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.66666 7.33334L7.33332 11L3.66666 14.6667"
      stroke="#F6B816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Edit = ({ size, color, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "18"}
    height={size ?? "18"}
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M3 15H6L13.875 7.12498C14.7034 6.29656 14.7034 4.95341 13.875 4.12498C13.0466 3.29656 11.7034 3.29656 10.875 4.12498L3 12V15"
      stroke={color ?? "currentColor"}
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.125 4.875L13.125 7.875"
      stroke={color ?? "currentColor"}
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Deactivate = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M10.2791 7.10126C9.93827 7.33672 9.85289 7.80385 10.0883 8.14464C10.3238 8.48542 10.7909 8.57081 11.1317 8.33536L10.2791 7.10126ZM5.92484 3.1041C5.6878 3.44379 5.771 3.91131 6.11068 4.14836C6.45036 4.3854 6.91789 4.3022 7.15493 3.96251L5.92484 3.1041ZM6.84619 5.90394C6.72518 5.5078 6.30595 5.28476 5.9098 5.40577C5.51366 5.52677 5.29062 5.94601 5.41162 6.34215L6.84619 5.90394ZM7.86665 8.82529C8.26139 8.9508 8.68314 8.73254 8.80865 8.3378C8.93416 7.94306 8.7159 7.52132 8.32116 7.39581L7.86665 8.82529ZM11.1317 8.33536C12.3662 7.48243 12.9734 5.97576 12.6753 4.5052L11.2052 4.80317C11.3841 5.68551 11.0197 6.58951 10.2791 7.10126L11.1317 8.33536ZM12.6753 4.5052C12.3773 3.03464 11.2313 1.88331 9.76216 1.57838L9.45733 3.04708C10.3388 3.23004 11.0264 3.92083 11.2052 4.80317L12.6753 4.5052ZM9.76216 1.57838C8.29301 1.27345 6.78352 1.87363 5.92484 3.1041L7.15493 3.96251C7.67014 3.22423 8.57583 2.86412 9.45733 3.04708L9.76216 1.57838ZM5.41162 6.34215C5.77231 7.52293 6.69005 8.45118 7.86665 8.82529L8.32116 7.39581C7.61426 7.17104 7.06289 6.61335 6.84619 5.90394L5.41162 6.34215Z"
        fill="#115FAA"
      />
      <path
        d="M3.75 15.75C3.75 16.1642 4.08579 16.5 4.5 16.5C4.91421 16.5 5.25 16.1642 5.25 15.75H3.75ZM10.5 11.25V12L10.5006 12L10.5 11.25ZM11.1458 12.0939C11.5427 12.2124 11.9605 11.9866 12.0789 11.5897C12.1974 11.1928 11.9716 10.775 11.5747 10.6566L11.1458 12.0939ZM14.0925 13.1708C13.9737 12.774 13.5557 12.5486 13.1589 12.6674C12.7621 12.7862 12.5367 13.2042 12.6555 13.601L14.0925 13.1708ZM13.5 14.2499L12.75 14.249V14.2499H13.5ZM12.75 15.7499C12.75 16.1641 13.0858 16.4999 13.5 16.4999C13.9142 16.4999 14.25 16.1641 14.25 15.7499H12.75ZM5.25 15.75V14.25H3.75V15.75H5.25ZM5.25 14.25C5.25 13.0074 6.25736 12 7.5 12V10.5C5.42893 10.5 3.75 12.1789 3.75 14.25H5.25ZM7.5 12H10.5V10.5H7.5V12ZM10.5006 12C10.7191 11.9998 10.9364 12.0315 11.1458 12.0939L11.5747 10.6566C11.2258 10.5524 10.8635 10.4997 10.4994 10.5L10.5006 12ZM12.6555 13.601C12.7184 13.8112 12.7503 14.0296 12.75 14.249L14.25 14.2508C14.2505 13.8851 14.1974 13.5212 14.0925 13.1708L12.6555 13.601ZM12.75 14.2499V15.7499H14.25V14.2499H12.75Z"
        fill="#115FAA"
      />
      <path
        d="M2.25 2.25L15.75 15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Reset = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M2.29396 8.15251C2.24013 8.56321 2.52942 8.93979 2.94012 8.99363C3.35082 9.04746 3.7274 8.75816 3.78124 8.34746L2.29396 8.15251ZM4.10936 10.9725C3.95609 10.5876 3.51988 10.4 3.13507 10.5532C2.75026 10.7065 2.56256 11.1427 2.71583 11.5275L4.10936 10.9725ZM2.2876 15C2.2876 15.4142 2.62338 15.75 3.0376 15.75C3.45181 15.75 3.7876 15.4142 3.7876 15H2.2876ZM3.0376 11.25V10.5C2.62338 10.5 2.2876 10.8358 2.2876 11.25H3.0376ZM6.7876 12C7.20181 12 7.5376 11.6642 7.5376 11.25C7.5376 10.8358 7.20181 10.5 6.7876 10.5V12ZM3.78124 8.34746C4.12457 5.72815 6.3607 3.77191 9.00241 3.77981L9.00689 2.27982C5.61041 2.26966 2.73539 4.78483 2.29396 8.15251L3.78124 8.34746ZM9.00241 3.77981C11.6441 3.78771 13.8685 5.75729 14.1962 8.3786L15.6846 8.19255C15.2633 4.82229 12.4034 2.28997 9.00689 2.27982L9.00241 3.77981ZM14.1962 8.3786C14.5238 10.9999 12.8527 13.4564 10.2942 14.1144L10.6678 15.5671C13.9573 14.7212 16.1059 11.5628 15.6846 8.19255L14.1962 8.3786ZM10.2942 14.1144C7.73575 14.7723 5.08689 13.4267 4.10936 10.9725L2.71583 11.5275C3.97265 14.6829 7.37833 16.413 10.6678 15.5671L10.2942 14.1144ZM3.7876 15V11.25H2.2876V15H3.7876ZM3.0376 12H6.7876V10.5H3.0376V12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Save = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12L15.75 6V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 15.75V9.75H5.25V15.75"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.25 2.25V6H11.25"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Manage = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "25"}
    height={size ?? "24"}
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M7.14939 6.72045C7.03034 6.32371 6.61221 6.0986 6.21547 6.21765C5.81874 6.3367 5.59363 6.75483 5.71267 7.15156L7.14939 6.72045ZM6.98767 11.4006C7.10672 11.7973 7.52485 12.0224 7.92159 11.9034C8.31832 11.7843 8.54344 11.3662 8.42439 10.9694L6.98767 11.4006ZM13.5285 16.0756C13.1317 15.9566 12.7136 16.1818 12.5946 16.5785C12.4756 16.9753 12.7008 17.3934 13.0975 17.5124L13.5285 16.0756ZM17.3485 18.7874C17.7453 18.9064 18.1634 18.6812 18.2824 18.2845C18.4014 17.8877 18.1762 17.4696 17.7795 17.3506L17.3485 18.7874ZM5.71267 7.15156L6.98767 11.4006L8.42439 10.9694L7.14939 6.72045L5.71267 7.15156ZM13.0975 17.5124L17.3485 18.7874L17.7795 17.3506L13.5285 16.0756L13.0975 17.5124Z"
      fill="currentColor"
    />
    <path
      d="M12.183 12.317L17.942 6.55801"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="6"
      cy="5.5"
      r="1.5"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="19"
      cy="5.5"
      r="1.5"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="19"
      cy="18.5"
      r="1.5"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9"
      cy="15.5"
      r="4.5"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SchoolDistrict = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "28"}
    height={size ?? "28"}
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M10.394 9.43934C9.80821 8.85355 8.85846 8.85355 8.27267 9.43934C7.68689 10.0251 7.68689 10.9749 8.27267 11.5607L10.394 9.43934ZM15.1667 16.3333H16.6667C16.6667 15.9355 16.5086 15.554 16.2273 15.2727L15.1667 16.3333ZM15.1667 24.5V26C15.9951 26 16.6667 25.3284 16.6667 24.5H15.1667ZM9.33333 24.5H7.83333C7.83333 25.3284 8.50491 26 9.33333 26V24.5ZM10.8333 19.8333C10.8333 19.0049 10.1618 18.3333 9.33333 18.3333C8.50491 18.3333 7.83333 19.0049 7.83333 19.8333H10.8333ZM9.33333 26C10.1618 26 10.8333 25.3284 10.8333 24.5C10.8333 23.6716 10.1618 23 9.33333 23V26ZM3.5 24.5H2C2 25.3284 2.67157 26 3.5 26L3.5 24.5ZM3.5 16.3333L2.43934 15.2727C2.15804 15.554 2 15.9355 2 16.3333H3.5ZM10.394 11.5607C10.9798 10.9749 10.9798 10.0251 10.394 9.43934C9.80821 8.85355 8.85846 8.85355 8.27267 9.43934L10.394 11.5607ZM9 11.6667C9 12.4951 9.67157 13.1667 10.5 13.1667C11.3284 13.1667 12 12.4951 12 11.6667H9ZM24.5 24.5V26C25.3284 26 26 25.3284 26 24.5H24.5ZM15.1667 23C14.3382 23 13.6667 23.6716 13.6667 24.5C13.6667 25.3284 14.3382 26 15.1667 26V23ZM8.27267 11.5607L14.106 17.394L16.2273 15.2727L10.394 9.43934L8.27267 11.5607ZM13.6667 16.3333V24.5H16.6667V16.3333H13.6667ZM15.1667 23H9.33333V26H15.1667V23ZM10.8333 24.5V19.8333H7.83333V24.5H10.8333ZM9.33333 23H3.5V26H9.33333V23ZM5 24.5V16.3333H2V24.5H5ZM4.56066 17.394L10.394 11.5607L8.27267 9.43934L2.43934 15.2727L4.56066 17.394ZM12 11.6667V4.66667H9V11.6667H12ZM12 4.66667C12 4.85076 11.8508 5 11.6667 5V2C10.1939 2 9 3.19391 9 4.66667H12ZM11.6667 5H23.3333V2H11.6667V5ZM23.3333 5C23.1492 5 23 4.85076 23 4.66667H26C26 3.19391 24.8061 2 23.3333 2V5ZM23 4.66667V24.5H26V4.66667H23ZM24.5 23H15.1667V26H24.5V23Z"
      fill="#072847"
    />
    <path
      d="M15.1667 8.16637V8.17803"
      stroke="#072847"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8333 8.16637V8.17803"
      stroke="#072847"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8333 12.8334V12.845"
      stroke="#072847"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8333 17.5004V17.512"
      stroke="#072847"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const School = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "18"}
    height={size ?? "18"}
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M2.25 15.75H15.75"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 6H7.5"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 9H7.5"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 12H7.5"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 6H11.25"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 9H11.25"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 12H11.25"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 15.75V3.75C3.75 2.92157 4.42157 2.25 5.25 2.25H12.75C13.5784 2.25 14.25 2.92157 14.25 3.75V15.75"
      stroke="white"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AddTherapist = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "20"}
    height={size ?? "21"}
    viewBox="0 0 20 21"
    stroke={stroke ?? 2}
    fill="none"
  >
    <path
      d="M15.0002 6.42564H15.8335V7.25898C15.8335 7.47999 15.9213 7.69195 16.0776 7.84823C16.2339 8.00451 16.4458 8.09231 16.6668 8.09231C16.8878 8.09231 17.0998 8.00451 17.2561 7.84823C17.4124 7.69195 17.5002 7.47999 17.5002 7.25898V6.42564H18.3335C18.5545 6.42564 18.7665 6.33784 18.9228 6.18156C19.079 6.02528 19.1668 5.81332 19.1668 5.59231C19.1668 5.3713 19.079 5.15933 18.9228 5.00305C18.7665 4.84677 18.5545 4.75898 18.3335 4.75898H17.5002V3.92564C17.5002 3.70463 17.4124 3.49267 17.2561 3.33639C17.0998 3.18011 16.8878 3.09231 16.6668 3.09231C16.4458 3.09231 16.2339 3.18011 16.0776 3.33639C15.9213 3.49267 15.8335 3.70463 15.8335 3.92564V4.75898H15.0002C14.7792 4.75898 14.5672 4.84677 14.4109 5.00305C14.2546 5.15933 14.1668 5.3713 14.1668 5.59231C14.1668 5.81332 14.2546 6.02528 14.4109 6.18156C14.5672 6.33784 14.7792 6.42564 15.0002 6.42564ZM16.6668 13.9256C16.1496 13.9283 15.6459 14.0914 15.2252 14.3923L13.1835 13.184C13.2798 12.885 13.3304 12.5731 13.3335 12.259C13.3311 11.5218 13.0844 10.8063 12.6321 10.2243C12.1797 9.64225 11.5472 9.22659 10.8335 9.04231V7.10898C11.3895 6.9124 11.8581 6.52559 12.1565 6.01691C12.4549 5.50823 12.5639 4.91044 12.4642 4.3292C12.3644 3.74795 12.0624 3.22067 11.6115 2.84055C11.1607 2.46044 10.5899 2.25195 10.0002 2.25195C9.41042 2.25195 8.83967 2.46044 8.38878 2.84055C7.93789 3.22067 7.63589 3.74795 7.53617 4.3292C7.43644 4.91044 7.54541 5.50823 7.8438 6.01691C8.1422 6.52559 8.61082 6.9124 9.16683 7.10898V9.04231C8.4531 9.22659 7.82059 9.64225 7.36824 10.2243C6.91589 10.8063 6.66922 11.5218 6.66683 12.259C6.66993 12.5731 6.7205 12.885 6.81683 13.184L4.77516 14.3923C4.35446 14.0914 3.85076 13.9283 3.3335 13.9256C2.83904 13.9256 2.35569 14.0723 1.94457 14.347C1.53345 14.6217 1.21302 15.0121 1.0238 15.4689C0.834579 15.9257 0.785071 16.4284 0.881534 16.9134C0.977997 17.3983 1.2161 17.8438 1.56573 18.1934C1.91536 18.543 2.36082 18.7811 2.84577 18.8776C3.33072 18.9741 3.83339 18.9246 4.29021 18.7353C4.74702 18.5461 5.13747 18.2257 5.41217 17.8146C5.68687 17.4034 5.8335 16.9201 5.8335 16.4256C5.83042 16.1999 5.79678 15.9757 5.7335 15.759L7.65016 14.6173C8.27471 15.2381 9.11954 15.5866 10.0002 15.5866C10.8808 15.5866 11.7256 15.2381 12.3502 14.6173L14.2668 15.759C14.1272 16.2636 14.1496 16.7994 14.3308 17.2907C14.5119 17.782 14.8428 18.204 15.2767 18.4971C15.7106 18.7903 16.2256 18.9398 16.749 18.9246C17.2724 18.9093 17.7778 18.7302 18.1939 18.4123C18.61 18.0944 18.9158 17.6539 19.0682 17.153C19.2205 16.652 19.2117 16.1158 19.043 15.6201C18.8743 15.1244 18.5542 14.6942 18.1278 14.3902C17.7015 14.0861 17.1905 13.9237 16.6668 13.9256ZM3.3335 17.259C3.16868 17.259 3.00756 17.2101 2.87052 17.1185C2.73348 17.027 2.62667 16.8968 2.5636 16.7445C2.50052 16.5923 2.48402 16.4247 2.51618 16.2631C2.54833 16.1014 2.6277 15.9529 2.74424 15.8364C2.86079 15.7198 3.00927 15.6405 3.17092 15.6083C3.33257 15.5762 3.50013 15.5927 3.6524 15.6557C3.80467 15.7188 3.93482 15.8256 4.02639 15.9627C4.11796 16.0997 4.16683 16.2608 4.16683 16.4256C4.16683 16.6467 4.07903 16.8586 3.92275 17.0149C3.76647 17.1712 3.55451 17.259 3.3335 17.259ZM10.0002 3.92564C10.165 3.92564 10.3261 3.97452 10.4631 4.06608C10.6002 4.15765 10.707 4.2878 10.7701 4.44007C10.8331 4.59234 10.8496 4.7599 10.8175 4.92155C10.7853 5.0832 10.706 5.23169 10.5894 5.34823C10.4729 5.46478 10.3244 5.54414 10.1627 5.5763C10.0011 5.60845 9.83353 5.59195 9.68126 5.52888C9.52899 5.4658 9.39884 5.35899 9.30727 5.22195C9.2157 5.08491 9.16683 4.92379 9.16683 4.75898C9.16683 4.53796 9.25463 4.326 9.41091 4.16972C9.56719 4.01344 9.77915 3.92564 10.0002 3.92564ZM10.0002 13.9256C9.67053 13.9256 9.3483 13.8279 9.07421 13.6448C8.80013 13.4616 8.58651 13.2013 8.46036 12.8968C8.33422 12.5922 8.30121 12.2571 8.36552 11.9338C8.42983 11.6105 8.58857 11.3136 8.82165 11.0805C9.05474 10.8474 9.35171 10.6886 9.67501 10.6243C9.99831 10.56 10.3334 10.593 10.638 10.7192C10.9425 10.8453 11.2028 11.0589 11.3859 11.333C11.5691 11.6071 11.6668 11.9293 11.6668 12.259C11.6668 12.701 11.4912 13.1249 11.1787 13.4375C10.8661 13.75 10.4422 13.9256 10.0002 13.9256ZM16.6668 17.259C16.502 17.259 16.3409 17.2101 16.2039 17.1185C16.0668 17.027 15.96 16.8968 15.8969 16.7445C15.8339 16.5923 15.8174 16.4247 15.8495 16.2631C15.8817 16.1014 15.961 15.9529 16.0776 15.8364C16.1941 15.7198 16.3426 15.6405 16.5043 15.6083C16.6659 15.5762 16.8335 15.5927 16.9857 15.6557C17.138 15.7188 17.2682 15.8256 17.3597 15.9627C17.4513 16.0997 17.5002 16.2608 17.5002 16.4256C17.5002 16.6467 17.4124 16.8586 17.2561 17.0149C17.0998 17.1712 16.8878 17.259 16.6668 17.259Z"
      fill="currentColor"
    />
  </svg>
);

export const SchoolDistrictLight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M7.197 6.96967C6.9041 6.67678 6.42923 6.67678 6.13634 6.96967C5.84344 7.26256 5.84344 7.73744 6.13634 8.03033L7.197 6.96967ZM10.8333 11.6667H11.5833C11.5833 11.4678 11.5043 11.277 11.3637 11.1363L10.8333 11.6667ZM10.8333 17.5V18.25C11.2475 18.25 11.5833 17.9142 11.5833 17.5H10.8333ZM6.66667 17.5H5.91667C5.91667 17.9142 6.25245 18.25 6.66667 18.25V17.5ZM7.41667 14.1667C7.41667 13.7525 7.08088 13.4167 6.66667 13.4167C6.25245 13.4167 5.91667 13.7525 5.91667 14.1667H7.41667ZM6.66667 18.25C7.08088 18.25 7.41667 17.9142 7.41667 17.5C7.41667 17.0858 7.08088 16.75 6.66667 16.75V18.25ZM2.5 17.5H1.75C1.75 17.9142 2.08579 18.25 2.5 18.25V17.5ZM2.5 11.6667L1.96967 11.1363C1.82902 11.277 1.75 11.4678 1.75 11.6667H2.5ZM7.197 8.03033C7.48989 7.73744 7.48989 7.26256 7.197 6.96967C6.9041 6.67678 6.42923 6.67678 6.13634 6.96967L7.197 8.03033ZM6.75 8.33333C6.75 8.74755 7.08579 9.08333 7.5 9.08333C7.91421 9.08333 8.25 8.74755 8.25 8.33333H6.75ZM17.5 17.5V18.25C17.9142 18.25 18.25 17.9142 18.25 17.5H17.5ZM10.8333 16.75C10.4191 16.75 10.0833 17.0858 10.0833 17.5C10.0833 17.9142 10.4191 18.25 10.8333 18.25V16.75ZM6.13634 8.03033L10.303 12.197L11.3637 11.1363L7.197 6.96967L6.13634 8.03033ZM10.0833 11.6667V17.5H11.5833V11.6667H10.0833ZM10.8333 16.75H6.66667V18.25H10.8333V16.75ZM7.41667 17.5V14.1667H5.91667V17.5H7.41667ZM6.66667 16.75H2.5V18.25H6.66667V16.75ZM3.25 17.5V11.6667H1.75V17.5H3.25ZM3.03033 12.197L7.197 8.03033L6.13634 6.96967L1.96967 11.1363L3.03033 12.197ZM8.25 8.33333V3.33333H6.75V8.33333H8.25ZM8.25 3.33333C8.25 3.28731 8.28731 3.25 8.33333 3.25V1.75C7.45888 1.75 6.75 2.45888 6.75 3.33333H8.25ZM8.33333 3.25H16.6667V1.75H8.33333V3.25ZM16.6667 3.25C16.7127 3.25 16.75 3.28731 16.75 3.33333H18.25C18.25 2.45888 17.5411 1.75 16.6667 1.75V3.25ZM16.75 3.33333V17.5H18.25V3.33333H16.75ZM17.5 16.75H10.8333V18.25H17.5V16.75Z"
      fill="#4F4E53"
    />
    <path
      d="M10.8333 5.8334V5.84173"
      stroke="#4F4E53"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 5.8334V5.84173"
      stroke="#4F4E53"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 9.16689V9.17523"
      stroke="#4F4E53"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 12.4999V12.5082"
      stroke="#4F4E53"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Time = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M3.16659 15.7493C3.16659 16.5778 3.83816 17.2493 4.66659 17.2493C5.49501 17.2493 6.16659 16.5778 6.16659 15.7493H3.16659ZM13.9999 21.8327C13.1715 21.8327 12.4999 22.5043 12.4999 23.3327C12.4999 24.1611 13.1715 24.8327 13.9999 24.8327V21.8327ZM4.66659 10.166C3.83816 10.166 3.16659 10.8376 3.16659 11.666C3.16659 12.4944 3.83816 13.166 4.66659 13.166V10.166ZM23.3333 13.166C24.1617 13.166 24.8333 12.4944 24.8333 11.666C24.8333 10.8376 24.1617 10.166 23.3333 10.166V13.166ZM13.1666 4.66602C13.1666 3.83759 12.495 3.16602 11.6666 3.16602C10.8382 3.16602 10.1666 3.83759 10.1666 4.66602H13.1666ZM10.1666 18.0827C10.1666 18.9111 10.8382 19.5827 11.6666 19.5827C12.495 19.5827 13.1666 18.9111 13.1666 18.0827H10.1666ZM2.33325 20.666C1.50482 20.666 0.833252 21.3376 0.833252 22.166C0.833252 22.9944 1.50482 23.666 2.33325 23.666V20.666ZM10.4999 23.666C11.3283 23.666 11.9999 22.9944 11.9999 22.166C11.9999 21.3376 11.3283 20.666 10.4999 20.666V23.666ZM8.06058 17.6054C7.47479 17.0196 6.52505 17.0196 5.93926 17.6054C5.35347 18.1911 5.35347 19.1409 5.93926 19.7267L8.06058 17.6054ZM10.4999 22.166L11.5606 23.2267C12.1464 22.6409 12.1464 21.6911 11.5606 21.1054L10.4999 22.166ZM5.93926 24.6054C5.35347 25.1911 5.35347 26.1409 5.93926 26.7267C6.52505 27.3125 7.47479 27.3125 8.06058 26.7267L5.93926 24.6054ZM6.16659 15.7493V6.99935H3.16659V15.7493H6.16659ZM6.16659 6.99935C6.16659 6.53911 6.53968 6.16602 6.99992 6.16602V3.16602C4.88283 3.16602 3.16659 4.88226 3.16659 6.99935H6.16659ZM6.99992 6.16602H20.9999V3.16602H6.99992V6.16602ZM20.9999 6.16602C21.4602 6.16602 21.8333 6.53911 21.8333 6.99935H24.8333C24.8333 4.88226 23.117 3.16602 20.9999 3.16602V6.16602ZM21.8333 6.99935V20.9993H24.8333V6.99935H21.8333ZM21.8333 20.9993C21.8333 21.4596 21.4602 21.8327 20.9999 21.8327V24.8327C23.117 24.8327 24.8333 23.1164 24.8333 20.9993H21.8333ZM20.9999 21.8327H13.9999V24.8327H20.9999V21.8327ZM4.66659 13.166H23.3333V10.166H4.66659V13.166ZM10.1666 4.66602V18.0827H13.1666V4.66602H10.1666ZM2.33325 23.666H10.4999V20.666H2.33325V23.666ZM5.93926 19.7267L9.43926 23.2267L11.5606 21.1054L8.06058 17.6054L5.93926 19.7267ZM9.43926 21.1054L5.93926 24.6054L8.06058 26.7267L11.5606 23.2267L9.43926 21.1054Z"
      fill="currentColor"
    />
  </svg>
);

export const Timesheets = ({ size, stroke }) => {
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
        d="M7.33317 5.26294H5.49984C4.48732 5.26294 3.6665 6.08375 3.6665 7.09627V18.0963C3.6665 19.1088 4.48732 19.9296 5.49984 19.9296H10.7221"
        strokeWidth={stroke ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 13.5129V17.1796H20.1667"
        strokeWidth={stroke ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5002 10.7629V7.09627C16.5002 6.08375 15.6794 5.26294 14.6668 5.26294H12.8335"
        strokeWidth={stroke ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="7.3335"
        y="3.42969"
        width="5.5"
        height="3.66667"
        rx="1.83333"
        strokeWidth={stroke ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="16.5002"
        cy="17.1796"
        r="3.66667"
        strokeWidth={stroke ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.3335 10.763H11.0002"
        strokeWidth={stroke ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.3335 14.4298H10.0835"
        strokeWidth={stroke ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BackArrow = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "22"}
    height={size ?? "22"}
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M7.71983 12.4469C8.01273 12.7398 8.4876 12.7398 8.78049 12.4469C9.07339 12.154 9.07339 11.6791 8.78049 11.3863L7.71983 12.4469ZM4.5835 8.24992L4.05317 7.71959C3.76027 8.01248 3.76027 8.48736 4.05317 8.78025L4.5835 8.24992ZM8.78049 5.11358C9.07339 4.82069 9.07339 4.34582 8.78049 4.05292C8.4876 3.76003 8.01273 3.76003 7.71983 4.05292L8.78049 5.11358ZM4.5835 7.49992C4.16928 7.49992 3.8335 7.8357 3.8335 8.24992C3.8335 8.66413 4.16928 8.99992 4.5835 8.99992V7.49992ZM13.7502 14.8333C13.3359 14.8333 13.0002 15.169 13.0002 15.5833C13.0002 15.9975 13.3359 16.3333 13.7502 16.3333V14.8333ZM8.78049 11.3863L5.11383 7.71959L4.05317 8.78025L7.71983 12.4469L8.78049 11.3863ZM5.11383 8.78025L8.78049 5.11358L7.71983 4.05292L4.05317 7.71959L5.11383 8.78025ZM4.5835 8.99992H14.6668V7.49992H4.5835V8.99992ZM14.6668 8.99992C16.2777 8.99992 17.5835 10.3058 17.5835 11.9166H19.0835C19.0835 9.47733 17.1061 7.49992 14.6668 7.49992V8.99992ZM17.5835 11.9166C17.5835 13.5274 16.2777 14.8333 14.6668 14.8333V16.3333C17.1061 16.3333 19.0835 14.3558 19.0835 11.9166H17.5835ZM14.6668 14.8333H13.7502V16.3333H14.6668V14.8333Z"
      fill="currentColor"
    />
  </svg>
);

export const MessageIcon = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "22"}
    height={size ?? "22"}
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M3.6665 19.2502V7.3335C3.6665 5.81471 4.89772 4.5835 6.4165 4.5835H15.5832C17.102 4.5835 18.3332 5.81471 18.3332 7.3335V12.8335C18.3332 14.3523 17.102 15.5835 15.5832 15.5835H7.33317L3.6665 19.2502"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.3335 8.24984H14.6668"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.3335 11.9168H12.8335"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ErrorIcon = ({ size, stroke }) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "80"}
    height={size ?? "80"}
    viewBox="0 0 80 80"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29 10H51C52 10 52.6667 10.3333 53.3333 11L69 26.6667C69.6667 27.3333 70 28 70 29V51C70 52 69.6667 52.6667 69 53.3333L53.3333 69C52.6667 69.6667 52 70 51 70H29C28 70 27.3333 69.6667 26.6667 69L11 53.3333C10.3333 52.6667 10 52 10 51V29C10 28 10.3333 27.3333 11 26.6667L26.6667 11C27.3333 10.3333 28 10 29 10Z"
      stroke="#FA4858"
      strokeWidth={stroke ?? "3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.0002 26.6667V40.0001"
      stroke="#FA4858"
      strokeWidth={stroke ?? "3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M39.9996 53.3334H40.0329"
      stroke="#E71F2D"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>;
};

export const UndoIcon = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "25"}
    height={size ?? "24"}
    viewBox="0 0 25 24"
    fill="none"
    strokeWidth={stroke ?? 2}
  >
    <path
      d="M19.7064 11.0974C19.7603 11.5081 20.1368 11.7974 20.5475 11.7436C20.9582 11.6897 21.2475 11.3132 21.1937 10.9025L19.7064 11.0974ZM20.6468 15.2775C20.8001 14.8927 20.6124 14.4565 20.2276 14.3032C19.8428 14.1499 19.4066 14.3376 19.2533 14.7224L20.6468 15.2775ZM19.7 20C19.7 20.4142 20.0357 20.75 20.45 20.75C20.8642 20.75 21.2 20.4142 21.2 20H19.7ZM20.45 15H21.2C21.2 14.5858 20.8642 14.25 20.45 14.25V15ZM15.45 14.25C15.0357 14.25 14.7 14.5858 14.7 15C14.7 15.4142 15.0357 15.75 15.45 15.75V14.25ZM21.1937 10.9025C20.6215 6.53695 16.8946 3.27655 12.4917 3.28971L12.4962 4.78971C16.1443 4.7788 19.2323 7.48027 19.7064 11.0974L21.1937 10.9025ZM12.4917 3.28971C8.0889 3.30288 4.38159 6.58551 3.83548 10.9544L5.3239 11.1404C5.77639 7.52051 8.84816 4.80061 12.4962 4.78971L12.4917 3.28971ZM3.83548 10.9544C3.28937 15.3232 6.07459 19.4174 10.3387 20.514L10.7123 19.0612C7.17916 18.1527 4.87141 14.7603 5.3239 11.1404L3.83548 10.9544ZM10.3387 20.514C14.6028 21.6105 19.0176 19.3678 20.6468 15.2775L19.2533 14.7224C17.9034 18.1116 14.2454 19.9698 10.7123 19.0612L10.3387 20.514ZM21.2 20V15H19.7V20H21.2ZM20.45 14.25H15.45V15.75H20.45V14.25Z"
      fill="currentColor"
    />
  </svg>
);

export const Permission = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "28"}
    height={size ?? "28"}
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M22.1667 20.9999C24.4219 20.9999 26.25 19.1717 26.25 16.9166C26.25 14.6614 24.4219 12.8332 22.1667 12.8332H21C21.4632 10.7706 20.6675 8.6414 18.914 7.24841C17.1605 5.85657 14.714 5.41091 12.4974 6.08174C10.2807 6.75257 8.62988 8.43724 8.16672 10.4999C5.60122 10.3972 3.31922 12.0469 2.72305 14.4351C2.12572 16.8232 3.38105 19.2814 5.71672 20.2999"
      stroke="currentColor"
      strokeWidth={stroke ?? "3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="9.33301"
      y="17.5"
      width="9.33333"
      height="5.83333"
      rx="1"
      stroke="currentColor"
      strokeWidth={stroke ?? "3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.667 17.4999V15.1666C11.6665 14.1086 12.378 13.1827 13.4004 12.9107C14.4228 12.6387 15.5003 13.0886 16.0257 14.0069"
      stroke="currentColor"
      strokeWidth={stroke ?? "3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MileageIcon = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "20"}
    height={size ?? "21"}
    viewBox="0 0 20 21"
    fill="none"
  >
    <ellipse
      cx="5.83329"
      cy="14.6667"
      rx="1.66667"
      ry="1.66667"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse
      cx="5.83329"
      cy="14.6667"
      rx="1.66667"
      ry="1.66667"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="14.1667"
      cy="14.6667"
      r="1.66667"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="14.1667"
      cy="14.6667"
      r="1.66667"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16667 15.4167C4.58088 15.4167 4.91667 15.0809 4.91667 14.6667C4.91667 14.2525 4.58088 13.9167 4.16667 13.9167V15.4167ZM2.5 14.6667H1.75C1.75 15.0809 2.08579 15.4167 2.5 15.4167V14.6667ZM2.5 9.66667L1.80364 9.38812C1.76821 9.47671 1.75 9.57125 1.75 9.66667H2.5ZM4.16667 5.5V4.75C3.85999 4.75 3.58421 4.93671 3.47031 5.22146L4.16667 5.5ZM11.6667 5.5L12.2523 5.03148C12.11 4.85357 11.8945 4.75 11.6667 4.75V5.5ZM15 9.66667L14.4143 10.1352C14.5567 10.3131 14.7722 10.4167 15 10.4167V9.66667ZM17.5 14.6667V15.4167C17.9142 15.4167 18.25 15.0809 18.25 14.6667H17.5ZM15.8333 13.9167C15.4191 13.9167 15.0833 14.2525 15.0833 14.6667C15.0833 15.0809 15.4191 15.4167 15.8333 15.4167V13.9167ZM12.5 15.4167C12.9142 15.4167 13.25 15.0809 13.25 14.6667C13.25 14.2525 12.9142 13.9167 12.5 13.9167V15.4167ZM7.5 13.9167C7.08579 13.9167 6.75 14.2525 6.75 14.6667C6.75 15.0809 7.08579 15.4167 7.5 15.4167V13.9167ZM2.5 8.91667C2.08579 8.91667 1.75 9.25245 1.75 9.66667C1.75 10.0809 2.08579 10.4167 2.5 10.4167V8.91667ZM15 10.4167C15.4142 10.4167 15.75 10.0809 15.75 9.66667C15.75 9.25245 15.4142 8.91667 15 8.91667V10.4167ZM9.25 9.66667C9.25 10.0809 9.58579 10.4167 10 10.4167C10.4142 10.4167 10.75 10.0809 10.75 9.66667H9.25ZM10.75 5.5C10.75 5.08579 10.4142 4.75 10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5H10.75ZM4.16667 13.9167H2.5V15.4167H4.16667V13.9167ZM3.25 14.6667V9.66667H1.75V14.6667H3.25ZM3.19636 9.94521L4.86302 5.77854L3.47031 5.22146L1.80364 9.38812L3.19636 9.94521ZM4.16667 6.25H11.6667V4.75H4.16667V6.25ZM11.081 5.96852L14.4143 10.1352L15.5857 9.19815L12.2523 5.03148L11.081 5.96852ZM15 10.4167H15.8333V8.91667H15V10.4167ZM15.8333 10.4167C16.3396 10.4167 16.75 10.8271 16.75 11.3333H18.25C18.25 9.99865 17.168 8.91667 15.8333 8.91667V10.4167ZM16.75 11.3333V14.6667H18.25V11.3333H16.75ZM17.5 13.9167H15.8333V15.4167H17.5V13.9167ZM12.5 13.9167H7.5V15.4167H12.5V13.9167ZM2.5 10.4167H15V8.91667H2.5V10.4167ZM10.75 9.66667V5.5H9.25V9.66667H10.75Z"
      fill="currentColor"
    />
    <path
      d="M4.16667 15.4167C4.58088 15.4167 4.91667 15.0809 4.91667 14.6667C4.91667 14.2525 4.58088 13.9167 4.16667 13.9167V15.4167ZM2.5 14.6667H1.75C1.75 15.0809 2.08579 15.4167 2.5 15.4167V14.6667ZM2.5 9.66667L1.80364 9.38812C1.76821 9.47671 1.75 9.57125 1.75 9.66667H2.5ZM4.16667 5.5V4.75C3.85999 4.75 3.58421 4.93671 3.47031 5.22146L4.16667 5.5ZM11.6667 5.5L12.2523 5.03148C12.11 4.85357 11.8945 4.75 11.6667 4.75V5.5ZM15 9.66667L14.4143 10.1352C14.5567 10.3131 14.7722 10.4167 15 10.4167V9.66667ZM17.5 14.6667V15.4167C17.9142 15.4167 18.25 15.0809 18.25 14.6667H17.5ZM15.8333 13.9167C15.4191 13.9167 15.0833 14.2525 15.0833 14.6667C15.0833 15.0809 15.4191 15.4167 15.8333 15.4167V13.9167ZM12.5 15.4167C12.9142 15.4167 13.25 15.0809 13.25 14.6667C13.25 14.2525 12.9142 13.9167 12.5 13.9167V15.4167ZM7.5 13.9167C7.08579 13.9167 6.75 14.2525 6.75 14.6667C6.75 15.0809 7.08579 15.4167 7.5 15.4167V13.9167ZM2.5 8.91667C2.08579 8.91667 1.75 9.25245 1.75 9.66667C1.75 10.0809 2.08579 10.4167 2.5 10.4167V8.91667ZM15 10.4167C15.4142 10.4167 15.75 10.0809 15.75 9.66667C15.75 9.25245 15.4142 8.91667 15 8.91667V10.4167ZM9.25 9.66667C9.25 10.0809 9.58579 10.4167 10 10.4167C10.4142 10.4167 10.75 10.0809 10.75 9.66667H9.25ZM10.75 5.5C10.75 5.08579 10.4142 4.75 10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5H10.75ZM4.16667 13.9167H2.5V15.4167H4.16667V13.9167ZM3.25 14.6667V9.66667H1.75V14.6667H3.25ZM3.19636 9.94521L4.86302 5.77854L3.47031 5.22146L1.80364 9.38812L3.19636 9.94521ZM4.16667 6.25H11.6667V4.75H4.16667V6.25ZM11.081 5.96852L14.4143 10.1352L15.5857 9.19815L12.2523 5.03148L11.081 5.96852ZM15 10.4167H15.8333V8.91667H15V10.4167ZM15.8333 10.4167C16.3396 10.4167 16.75 10.8271 16.75 11.3333H18.25C18.25 9.99865 17.168 8.91667 15.8333 8.91667V10.4167ZM16.75 11.3333V14.6667H18.25V11.3333H16.75ZM17.5 13.9167H15.8333V15.4167H17.5V13.9167ZM12.5 13.9167H7.5V15.4167H12.5V13.9167ZM2.5 10.4167H15V8.91667H2.5V10.4167ZM10.75 9.66667V5.5H9.25V9.66667H10.75Z"
      fill="white"
      fillOpacity="0.5"
    />
  </svg>
);

export const PendingIcon = ({ size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "20"}
    height={size ?? "21"}
    viewBox="0 0 20 21"
    fill="none"
  >
    <path
      d="M5.41663 6.33268H14.5833"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41663 6.33268H14.5833"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41663 14.6667H14.5833"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41663 14.6667H14.5833"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 17.1667V15.5C5 12.7386 7.23858 10.5 10 10.5C12.7614 10.5 15 12.7386 15 15.5V17.1667C15 17.6269 14.6269 18 14.1667 18H5.83333C5.3731 18 5 17.6269 5 17.1667V17.1667Z"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 17.1667V15.5C5 12.7386 7.23858 10.5 10 10.5C12.7614 10.5 15 12.7386 15 15.5V17.1667C15 17.6269 14.6269 18 14.1667 18H5.83333C5.3731 18 5 17.6269 5 17.1667V17.1667Z"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.83333V5.5C5 8.26142 7.23858 10.5 10 10.5C12.7614 10.5 15 8.26142 15 5.5V3.83333C15 3.3731 14.6269 3 14.1667 3H5.83333C5.3731 3 5 3.3731 5 3.83333Z"
      stroke="currentColor"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.83333V5.5C5 8.26142 7.23858 10.5 10 10.5C12.7614 10.5 15 8.26142 15 5.5V3.83333C15 3.3731 14.6269 3 14.1667 3H5.83333C5.3731 3 5 3.3731 5 3.83333Z"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={stroke ?? "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);