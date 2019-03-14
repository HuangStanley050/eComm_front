import React from "react";
import API from "../../config/api";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardText,
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
                <CardTitle>{product.title}</CardTitle>
                <CardSubtitle>$ {product.price}</CardSubtitle>
                <CardText>{product.description}</CardText>
                {props.ordered.find(item => item._id === product._id)
                  ? (checkStatus = true)
                  : (checkStatus = false)}
                <Button
                  disabled={checkStatus}
                  onClick={() => props.addToCart({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
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
