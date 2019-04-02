import React from "react";
import { Container, Row, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Issue = () => {
  return (
    <Container style={{ marginTop: "4rem" }}>
      <Row>
        <div className="hero-unit">
          <h1>
            Error has occured{" "}
            <small style={{ color: "red" }}>Error 404/500</small>
          </h1>
          <br />
          <p>
            The page you requested could not be found, either contact your
            webmaster or try again. Use your browsers <b>Back</b> button to
            navigate to the page you have prevously come from
          </p>
          <p>
            <b>Or you could just press this neat little button:</b>
          </p>
          <Button tag={Link} to="/products" className="btn btn-large btn-info">
            <i className="icon-home icon-white" /> Take Me Home
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Issue;
