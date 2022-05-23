import React from "react";
import { LoginContainer } from "./layoutStyle";

const Login = ({ show }: { show: number }) => {
  return (
    <LoginContainer show={show}>
      <div className="title2">로그인</div>
      <label>
        <div className="icon">⭐️</div>
        <input type="text" placeholder="아이디를 입력하세요" />
      </label>
      <label>
        <div className="icon">⭐️</div>
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </label>
      <button>로그인</button>
    </LoginContainer>
  );
};

export default Login;
