import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeButton from "../../components/strip.checkout/strip.checkout";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div>
      <span className="total">Total: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following card details for payment *
      <br />
      4242 4242 4242 4242 : Exp: 05/25 : CVV : 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
