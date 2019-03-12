import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { fetchProductsPage } from "../../store/actions/productAction";

class Products extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Container>
        <h1>Products Page</h1>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchProductsPage())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Products);
