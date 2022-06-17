import React, { useCallback, useState } from "react";
import { LoginContainer } from "./layoutStyle";
import Auth from "../../assets/api/auth";
import { useDispatch } from "react-redux";
import userAction from "../../util/enums/userAction";

const Login = ({ show }: { show: number }) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const click = useCallback(() => {
    try {
      Auth.LoginRequest(id, password).then((res) => {
        const bool = res.data.login;
        if (bool) {
          dispatch({ type: userAction.ADMIN_LOGIN });
          console.log("login");
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, [id, password]);

  const changeId = useCallback(
    (e: any) => {
      setId(e.target.value);
    },
    [id]
  );

  const changePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
    },
    [password]
  );

  return (
    <LoginContainer show={show}>
      <div className="title2">로그인</div>
      <label>
        <div className="icon">⭐️</div>
        <input
          value={id}
          onChange={changeId}
          type="text"
          placeholder="아이디를 입력하세요"
        />
      </label>
      <label>
        <div className="icon">⭐️</div>
        <input
          value={password}
          onChange={changePassword}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </label>
      <button onClick={click}>로그인</button>
    </LoginContainer>
  );
};

export default Login;
