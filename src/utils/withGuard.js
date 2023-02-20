import { useSelector } from "react-redux";

const withGuard = (Component) => {
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return (
      <>
        {isLoggedIn ? (
          <Component {...props} />
        ) : (
          <h6>Please login to fave full access..</h6>
        )}
      </>
    );
  };
  return Wrapper;
};

export default withGuard;
