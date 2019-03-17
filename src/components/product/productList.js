import React from "react";
import API from "../../config/api";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Button
} from "reactstrap";

const ProductList = props => {
  const imageStyle = {
    height: "40vh",
    objectFit: "contain"
  };
  let checkStatus;

  const cardTextStyle = {
    textAlign: "center"
  };

  return (
    <Row>
      {props.products.map(product => {
        return (
          <Col md="4" key={product._id}>
            <Card>
              <CardImg
                style={imageStyle}
                top
                width="100%"
                src={API.fetchProductImg + product.imageId}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle style={cardTextStyle}>{product.title}</CardTitle>
                <CardSubtitle style={cardTextStyle}>
                  $ {product.price}
                </CardSubtitle>

                {props.ordered.find(item => item._id === product._id)
                  ? (checkStatus = true)
                  : (checkStatus = false)}
                <div className="row justify-content-center">
                  <Button
                    disabled={checkStatus}
                    onClick={() => props.addToCart({ ...product, quantity: 1 })}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    ordered: state.cart.orderedProducts
  };
};

export default connect(mapStateToProps)(ProductList);
