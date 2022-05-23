import React, { useCallback, useState } from "react";
import { LayoutConatiner } from "./layoutStyle";
import Login from "./Login";

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const toggleClick = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <LayoutConatiner>
      <div className="title">DGSW</div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleClick}
      >
        <rect width="4" height="4" rx="1" fill="#003AAD" />
        <rect x="7" width="4" height="4" rx="1" fill="#003AAD" />
        <rect x="14" width="4" height="4" rx="1" fill="#003AAD" />
        <rect x="7" y="7" width="4" height="4" rx="1" fill="#003AAD" />
        <rect x="14" y="7" width="4" height="4" rx="1" fill="#003AAD" />
        <rect x="14" y="14" width="4" height="4" rx="1" fill="#003AAD" />
        <rect x="7" y="14" width="4" height="4" rx="1" fill="#003AAD" />
        <rect y="14" width="4" height="4" rx="1" fill="#003AAD" />
        <rect y="7" width="4" height="4" rx="1" fill="#003AAD" />
      </svg>
      <div className="alert">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 7.99618L15.1145 5.871L15.3773 3.05781L12.5877 2.43096L11.1273 0L8.5 1.1161L5.87273 0L4.41227 2.43096L1.62273 3.05017L1.88545 5.86335L0 7.99618L1.88545 10.1214L1.62273 12.9422L4.41227 13.569L5.87273 16L8.5 14.8763L11.1273 15.9924L12.5877 13.5614L15.3773 12.9345L15.1145 10.1214L17 7.99618ZM9.27273 11.8184H7.72727V10.2895H9.27273V11.8184ZM9.27273 8.76063H7.72727V4.17391H9.27273V8.76063Z"
            fill="#FF0000"
          />
        </svg>
        로그인을 하여 관리자 모드에 접속하십시오
      </div>
      {toggle ? <Login show={1} /> : <Login show={0} />}
    </LayoutConatiner>
  );
};

export default Layout;
