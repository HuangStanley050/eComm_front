import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { fetchProductsPage } from "../../store/actions/productAction";
import PaginationMain from "../pagination/paginationmain";

class Products extends Component {
  componentDidMount() {
    this.props.fetch(this.props.product.currentPage);
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <h1>Products Page</h1>
        </Container>
        <PaginationMain />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: currentPage => dispatch(fetchProductsPage(currentPage))
  };
};

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
