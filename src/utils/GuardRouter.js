import React from "react";
import { useSelector } from "react-redux";

const GuardRouter = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return <>{isLoggedIn ? children : <p>Please Login..</p>}</>;
};

export default GuardRouter;
