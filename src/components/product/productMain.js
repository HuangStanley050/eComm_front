import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loading/spinner";
import {
  fetchProductsPage,
  changePage
} from "../../store/actions/productAction";
import { add_to_cart } from "../../store/actions/cartAction";
import { clear_product_fetch_error } from "../../store/actions/productAction";
import PaginationMain from "../pagination/paginationmain";
import ProductList from "./productList";

class Products extends Component {
  componentDidMount() {
    this.props.clearError();
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

  addProductToCart = productInfo => {
    this.props.addToCart(productInfo);
  };

  render() {
    const pages = this.props.product.totalPages;
    const { products } = this.props.product;
    let redirect = null;
    let content;
    if (this.props.errorState.hasOwnProperty("code"))
      redirect = <Redirect to="/error" />;
    if (this.props.product.loading) {
      content = <Loader />;
    } else {
      content = (
        <React.Fragment>
          <Container style={{ marginTop: "5rem" }}>
            {redirect}
            <ProductList
              products={products}
              addToCart={this.addProductToCart}
            />
          </Container>
          <PaginationMain totalPages={pages} getPage={this.changeCurrentPage} />
        </React.Fragment>
      );
    }
    return content;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: currentPage => dispatch(fetchProductsPage(currentPage)),
    changePage: pageNo => dispatch(changePage(pageNo)),
    addToCart: productInfo => dispatch(add_to_cart(productInfo)),
    clearError: () => dispatch(clear_product_fetch_error())
  };
};

const mapStateToProps = state => {
  return {
    product: state.product,
    errorState: state.product.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
