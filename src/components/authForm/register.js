import React from "react";
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
import { register_user_start } from "../../store/actions/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//import Loader from "../loading/spinner";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.register(this.state);
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };

  render() {
    let redirect = null;
    if (this.props.registered) {
      redirect = <Redirect to="/login" />;
    }

    return (
      <Container className="page" style={{ marginTop: "2rem" }}>
        {redirect}
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.submitHandler}>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  onChange={this.handleInput}
                  type="string"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={this.state.name}
                />
              </FormGroup>
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

const mapDispatchToProps = dispatch => {
  return {
    register: userInfo => dispatch(register_user_start(userInfo))
  };
};

const mapStateToProps = state => {
  return {
    registered: state.auth.isRegistered
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
