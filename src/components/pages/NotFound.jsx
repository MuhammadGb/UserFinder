import React from "react";

export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "85vh",
      }}
    >
      <h1>Not Found</h1>
      <p className="lead">
        404 Page not found{" "}
        <span role="img" aria-label="sad">
          😓
        </span>
      </p>{" "}
    </div>
  );
};
