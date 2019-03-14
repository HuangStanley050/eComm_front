import React from "react";
import { Table, Container } from "reactstrap";
import { connect } from "react-redux";

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
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td> <td>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    ordered: state.cart.orderedProducts
  };
};

export default connect(mapStateToProps)(Cart);
