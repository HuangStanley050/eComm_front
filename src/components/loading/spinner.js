import React from "react";
import { Spinner } from "reactstrap";

const Loader = props => {
  const loaderStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "3rem",
    height: "3rem"
  };
  return (
    <div>
      {" "}
      <Spinner style={loaderStyle} color="danger" />
    </div>
  );
};

export default Loader;
