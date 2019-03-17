import React from "react";
import { Table, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import "./cart.css";
import {
  increaseProd,
  decreaseProd,
  remove_from_cart
} from "../../store/actions/cartAction";

const Cart = props => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Framework</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.ordered.map(item => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <div>
                    <div>
                      <i
                        style={{ marginRight: "1rem" }}
                        className="fas fa-plus-square"
                        onClick={() => props.increase(item)}
                      />
                      <input
                        style={{
                          width: "2rem",
                          height: "1rem",
                          textAlign: "right"
                        }}
                        disbaled
                        value={item.quantity}
                      />
                      <i
                        style={{ marginLeft: "1rem" }}
                        className="fas fa-minus-square"
                        onClick={() => props.decrease(item)}
                      />
                    </div>
                    <Button onClick={() => props.remove(item)} color="danger">
                      Remove
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h1 style={{ marginTop: "3rem", textAlign: "right" }}>
        Total: {props.total}
      </h1>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    ordered: state.cart.orderedProducts,
    total: state.cart.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: productInfo => dispatch(increaseProd(productInfo)),
    decrease: productInfo => dispatch(decreaseProd(productInfo)),
    remove: productInfo => dispatch(remove_from_cart(productInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
