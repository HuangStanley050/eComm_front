import React from "react";
import { Table, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./cart.css";
import {
  increaseProd,
  decreaseProd,
  remove_from_cart,
  make_payment_start
} from "../../store/actions/cartAction";

const Cart = props => {
  const onToken = token => {
    const body = {
      amount: props.total,
      token
    };

    props.pay(body);
  };

  let paymentForm = (
    <StripeCheckout
      token={onToken}
      name="Framework Inc"
      stripeKey="pk_test_rOnIUC7hbo7ElO2ZOTW2mbDZ"
      panelLabel="Make Payment"
      currency="USD"
      amount={props.total * 100}
    >
      <div style={{ textAlign: "right" }}>
        <Button disabled={props.total > 0 ? false : true} color="success">
          Place Order
        </Button>
      </div>
    </StripeCheckout>
  );

  const prePayment = (
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
          <TransitionGroup component={null}>
            {props.ordered.map(item => {
              return (
                <CSSTransition key={item._id} timeout={500} classNames="fade">
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <div>
                        <div>
                          <i
                            style={{ marginRight: "1rem", cursor: "pointer" }}
                            className="fas fa-plus-square"
                            onClick={() => props.increase(item)}
                          />
                          <input
                            style={{
                              width: "2rem",
                              height: "1rem",
                              textAlign: "right"
                            }}
                            readOnly
                            disbaled="true"
                            value={item.quantity}
                          />
                          <i
                            style={{ marginLeft: "1rem", cursor: "pointer" }}
                            className="fas fa-minus-square"
                            onClick={() => props.decrease(item)}
                          />
                        </div>
                        <Button
                          onClick={() => props.remove(item)}
                          color="danger"
                        >
                          Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </tbody>
      </Table>
      <h1 style={{ marginTop: "3rem", textAlign: "right" }}>
        Total: {props.total}
      </h1>

      {paymentForm}
    </Container>
  );

  return prePayment;
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
    remove: productInfo => dispatch(remove_from_cart(productInfo)),
    pay: paymentInfo => dispatch(make_payment_start(paymentInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
