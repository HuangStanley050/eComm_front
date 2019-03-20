import React, { useState } from "react";
import API from "../../config/api";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./productList.css";
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
  ModalBody
} from "reactstrap";

const ProductList = props => {
  const [modalStatus, toggleModal] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [productDescripition, setProductDescription] = useState("");
  const [imageId, setImageId] = useState("");
  const [hover, checkHover] = useState(false);

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
    cursor: "pointer",

    width: "100%"
  };
  let checkStatus;

  const cardTextStyle = {
    textAlign: "center"
  };
  let stats;

  return (
    <Row>
      <TransitionGroup component={null}>
        {props.products.map(product => {
          return (
            <Col md="4" key={product._id}>
              <Modal isOpen={modalStatus} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                  <div>
                    {modalStatus ? (
                      <img
                        style={{ width: "3rem", border: "none" }}
                        src={API.fetchProductImg + imageId}
                        className="img-thumbnail"
                      />
                    ) : null}
                    {productTitle}
                  </div>
                </ModalHeader>
                <ModalBody>{productDescripition}</ModalBody>
              </Modal>
              <Card style={{ overflow: "hidden" }}>
                <CSSTransition
                  in={hover}
                  timeout={2000}
                  classNames="productimg"
                >
                  <CardImg
                    onMouseOver={() => checkHover(!hover)}
                    onMouseOut={() => checkHover(!hover)}
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
                    src={API.fetchProductImg + product.imageId}
                    alt="Card image cap"
                  />
                </CSSTransition>

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
                      onClick={() =>
                        props.addToCart({ ...product, quantity: 1 })
                      }
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </TransitionGroup>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    ordered: state.cart.orderedProducts
  };
};

export default connect(mapStateToProps)(ProductList);
