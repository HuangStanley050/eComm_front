import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import {
  fetchProductsPage,
  changePage
} from "../../store/actions/productAction";
import PaginationMain from "../pagination/paginationmain";
import ProductList from "./productList";

class Products extends Component {
  componentDidMount() {
    this.props.fetch(this.props.product.currentPage);
  }

  componentDidUpdate(prevProps) {
    // console.log("componentdid update");
    // console.log(prevProps.product.currentPage);
    if (this.props.product.currentPage !== prevProps.product.currentPage) {
      this.props.fetch(this.props.product.currentPage);
    }
  }

  changeCurrentPage = pageNo => {
    //console.log(pageNo);
    this.props.changePage(pageNo);
  };

  render() {
    const pages = this.props.product.totalPages;
    const { products } = this.props.product;
    return (
      <React.Fragment>
        <Container style={{ marginTop: "5rem" }}>
          <ProductList products={products} />
        </Container>
        <PaginationMain totalPages={pages} getPage={this.changeCurrentPage} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: currentPage => dispatch(fetchProductsPage(currentPage)),
    changePage: pageNo => dispatch(changePage(pageNo))
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
