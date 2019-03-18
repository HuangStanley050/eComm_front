import React, { useState } from "react";
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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const ProductList = props => {
  const [modalStatus, toggleModal] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [productDescripition, setProductDescription] = useState("");
  const [imageId, setImageId] = useState("");

  //https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6
  //if I don't pass 'event' to this function, the Modal component will break
  const toggle = (event, title, description, imageId) => {
    setProductTitle(title);
    setProductDescription(description);
    setImageId(imageId);
    toggleModal(!modalStatus);
    //event.persist();
  };

  const imageStyle = {
    height: "40vh",
    objectFit: "contain",
    cursor: "pointer"
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
            <Modal isOpen={modalStatus} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                <div>
                  <img
                    style={{ width: "3rem", border: "none" }}
                    src={API.fetchProductImg + imageId}
                    className="img-thumbnail"
                  />
                  {productTitle}
                </div>
              </ModalHeader>
              <ModalBody>{productDescripition}</ModalBody>
            </Modal>
            <Card>
              <CardImg
                onClick={event =>
                  toggle(
                    event,
                    product.title,
                    product.description,
                    product.imageId
                  )
                }
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
