import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceforStripe = price * 100;
  const publishableKey =
    "pk_test_51I4jTXJ3xDBJwJBoXVIIlJcqgL06Oez1YioXgaRznhhbLjtDrRbmLwa18XqvKJh7hOgYNCU4ppifOAfpNYVMssIM00PFhzwgxf";

  const onToken = (token) => {
    alert("Payment successful : ", token);
  };

  return (
    <StripeCheckout
      label="pay Now"
      name="Clown Clothing Ltd."
      price
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceforStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
