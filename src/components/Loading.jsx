import React from "react";
import { useSelector } from "react-redux";

const Loading = ({ children }) => {
  const { loading, error } = useSelector((state) => state.posts);
  document.body.style.cursor = loading ? "wait" : "default";

  if (children?.type?.render?.displayName === "Button") {
    const cloneButton = React.cloneElement(
      children,
      { disabled: true },
      "Loading..."
    );
    return (
      <>
        {loading ? (
          cloneButton
        ) : error ? (
          <>
            <p style={{ color: "red" }}>
              {error}
              <br />
            </p>
            {children}
          </>
        ) : (
          <>{children}</>
        )}
      </>
    );
  }

  return (
    <>
      {loading ? (
        <p>Loading Please wait...</p>
      ) : error ? (
        <>
          <p style={{ color: "red" }}>
            {error}
            <br />
          </p>
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loading;
