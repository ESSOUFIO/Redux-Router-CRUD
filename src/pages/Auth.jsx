import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const LogHandler = () => {
    isLoggedIn ? dispatch(logOut()) : dispatch(logIn());
  };
  return (
    <div className="text-center">
      <h2 className="m-5">{isLoggedIn ? "Logout" : "Login"}</h2>
      <Button variant="primary" onClick={LogHandler}>
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
    </div>
  );
};

export default Auth;
