import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
//import * as actionType from "../../store/actions/actionTypes";
import { add_product } from "../../store/actions/productAction";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

class AdminForm extends Component {
  // componentDidMount() {
  //   this.props.addProduct();
  // }
  state = {
    title: "",
    description: "",
    price: 0,
    picture: null
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.picture === null) {
      alert("You have not selected a framework picture");
      return;
    } else {
      const formData = new FormData();
      formData.append("title", this.state.title);
      formData.append("description", this.state.description);
      formData.append("price", this.state.price);
      formData.append("file", this.state.picture);
      this.setState({
        title: "",
        description: "",
        price: 0,
        picture: null
      });
      //console.log(formData);
      document.getElementById("File").value = "";

      this.props.addProduct(formData);
    }
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  fileInputHandler = e => {
    const file = e.target.files[0];
    this.setState({ picture: file });
  };

  render() {
    let content;

    if (this.props.authAdmin.userInfo.hasOwnProperty("admin")) {
      content = (
        <Container className="page" style={{ marginTop: "30px" }}>
          <Form onSubmit={this.handleSubmit} style={{ margin: "0 auto" }}>
            <FormGroup>
              <Label
                style={{ display: "block", textAlign: "center" }}
                for="framework title"
              >
                Title
              </Label>
              <Input
                onChange={this.handleInput}
                value={this.state.title}
                style={{ width: "80%", margin: "auto" }}
                type="text"
                name="title"
                id="title"
                placeholder="Framework title"
              />
            </FormGroup>
            <FormGroup>
              <Label
                style={{ display: "block", textAlign: "center" }}
                for="description"
              >
                Description
              </Label>
              <Input
                onChange={this.handleInput}
                value={this.state.description}
                style={{ width: "80%", margin: "auto" }}
                type="text"
                name="description"
                id="description"
                placeholder="Description"
              />
            </FormGroup>
            <FormGroup>
              <Label
                style={{ display: "block", textAlign: "center" }}
                for="price"
              >
                Price
              </Label>
              <Input
                value={this.state.price}
                onChange={this.handleInput}
                style={{ width: "80%", margin: "auto" }}
                type="number"
                name="price"
                id="price"
                placeholder="$ Price"
              />
            </FormGroup>
            <FormGroup>
              <Label
                style={{ display: "block", textAlign: "center" }}
                for="exampleFile"
              >
                Frame Work Picture
              </Label>
              <Input
                onChange={this.fileInputHandler}
                style={{ width: "80%", margin: "auto" }}
                type="file"
                name="file"
                id="File"
              />
              <FormText style={{ width: "80%", margin: "auto" }} color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <div className="row justify-content-center">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Container>
      );
    } else {
      content = <Redirect to="/products" />;
    }

    return content;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: formData => dispatch(add_product(formData))
  };
};

const mapStateToProps = state => {
  return {
    authAdmin: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminForm);
