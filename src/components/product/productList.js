import React from "react";
import API from "../../config/api";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle
} from "reactstrap";

const ProductList = props => {
  const imageStyle = {
    height: "40vh",
    objectFit: "contain"
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
                <CardTitle>{product.title}</CardTitle>
                <CardSubtitle>{product.price}</CardSubtitle>
                <CardText>{product.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductList;
