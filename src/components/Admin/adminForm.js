import React, { Component } from "react";
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
  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
        <Form style={{ margin: "0 auto" }}>
          <FormGroup>
            <Label
              style={{ display: "block", textAlign: "center" }}
              for="framework title"
            >
              Title
            </Label>
            <Input
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
        </Form>
      </Container>
    );
  }
}

export default AdminForm;
