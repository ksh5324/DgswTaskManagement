import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import auth from "../assets/api/auth";
import userAction from "../util/enums/userAction";

const useAuth = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const click = useCallback(() => {
    try {
      auth.LoginRequest(id, password).then((res: any) => {
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
};

export default useAuth;
