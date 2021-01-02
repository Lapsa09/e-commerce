import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HwuM7Lq6A4DRX8ThBL7LsV7vPXpV4ATemgxPY9XWGfj3Ey0xZQ17oIFcUodqhqRkebtJYhQbPKJcsA9JWYt3fTJ00m4Py0Sln";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log("Payment error:", JSON.parse(err));
        alert("There was an issue with your payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MiMercadoLibre"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
