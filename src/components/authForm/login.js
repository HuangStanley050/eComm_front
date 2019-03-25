import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import { login_start } from "../../store/actions/authAction";
import Loader from "../loading/spinner";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    let redirect = null;

    if (this.props.auth.hasOwnProperty("admin")) {
      redirect = <Redirect to="/admin" />;
    }
    if (
      Object.keys(this.props.auth).length !== 0 &&
      !this.props.auth.hasOwnProperty("admin")
    ) {
      redirect = <Redirect to="/products" />;
    }

    return (
      <Container style={{ marginTop: "2rem" }}>
        {redirect}
        {this.props.loading ? (
          <Loader />
        ) : (
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    onChange={this.handleInput}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    value={this.state.email}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    onChange={this.handleInput}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="your password"
                    value={this.state.password}
                  />
                </FormGroup>
                <div className="row justify-content-center">
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              {this.props.error ? (
                <h2
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "2rem"
                  }}
                >
                  {this.props.error}
                </h2>
              ) : null}
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: userInfo => dispatch(login_start(userInfo))
  };
};
const mapStateToProps = state => {
  return {
    loading: state.auth.isloading,
    error: state.auth.error,
    auth: state.auth.userInfo
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
