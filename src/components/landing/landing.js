import React from "react";

const Landing = () => {
  const container = {
    height: "100%",
    width: "100%",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7191c4"
  };
  return (
    <div style={container} className="page">
      <h1>Landing page</h1>
    </div>
  );
};

export default Landing;
