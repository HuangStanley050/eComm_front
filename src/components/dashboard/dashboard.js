import React, { useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  Jumbotron
} from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const DashBoard = props => {
  let content;
  if (!props.auth) {
    content = <Redirect to="/login" />;
  } else {
    content = (
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col>
            <div>
              <Jumbotron>
                <h1>Welcome {props.user} </h1>
              </Jumbotron>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return content;
};

const mapStateToProps = state => {
  return {
    user: state.auth.userInfo.name,
    orders: state.auth.orderHistory,
    auth: state.auth.isAuth
  };
};

export default connect(mapStateToProps)(DashBoard);
