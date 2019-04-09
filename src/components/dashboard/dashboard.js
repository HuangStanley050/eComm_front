import React, { useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Container,
  Jumbotron
} from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetch_history } from "../../store/actions/cartAction";
import Loader from "../loading/spinner";
/*global localStorage */

const DashBoard = props => {
  useEffect(() => {
    props.fetchHistory(localStorage.token);
  }, []);

  let content;

  if (!props.auth) {
    content = <Redirect to="/login" />;
  } else {
    content = (
      <Container className="page" style={{ marginTop: "2rem" }}>
        {props.loadingStatus ? (
          <Loader />
        ) : (
          <Row>
            <Col>
              <div>
                <Jumbotron>
                  <h1>Welcome {props.user} </h1>
                </Jumbotron>
              </div>
              <div style={{ marginTop: "2rem" }}>
                {props.orderedItems.map(item => {
                  return (
                    <Card style={{ marginTop: "1rem" }} key={item._d}>
                      <CardHeader>
                        Ordered on{" "}
                        <span style={{ color: "red" }}>{item.date}</span>
                        <span style={{ color: "green", marginLeft: "1rem" }}>
                          $ {item.total_amount}
                        </span>
                      </CardHeader>
                      <CardBody>
                        {item.orders.map(order => {
                          return (
                            <CardTitle key>
                              {order.title} x{order.quantity}
                            </CardTitle>
                          );
                        })}
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    );
  }

  return content;
};

const mapStateToProps = state => {
  return {
    user: state.auth.userInfo.name,
    orderedItems: state.cart.orderHistory,
    loadingStatus: state.cart.loading,
    auth: state.auth.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHistory: token => dispatch(fetch_history(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
