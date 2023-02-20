import { useSelector } from "react-redux";

const withGuard = (Component) => {
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return (
      <>
        {isLoggedIn ? (
          <Component {...props} />
        ) : (
          <h5>Please login to get full access .. </h5>
        )}
      </>
    );
  };
  return Wrapper;
};

export default withGuard;
