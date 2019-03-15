import React from "react";
import { Table, Container } from "reactstrap";
import { connect } from "react-redux";
import { increaseProd, decreaseProd } from "../../store/actions/cartAction";

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
                  <i
                    style={{ marginRight: "1rem" }}
                    className="fas fa-plus-square"
                    onClick={() => props.increase(item)}
                  />
                  <span>{item.quantity}</span>
                  <i
                    style={{ marginLeft: "1rem" }}
                    className="fas fa-minus-square"
                    onClick={() => props.decrease(item)}
                  />
                </td>
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

const mapDispatchToProps = dispatch => {
  return {
    increase: productInfo => dispatch(increaseProd(productInfo)),
    decrease: productInfo => dispatch(decreaseProd(productInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
