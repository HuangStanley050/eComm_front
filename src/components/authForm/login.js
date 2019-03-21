import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";

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
  render() {
    return (
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
