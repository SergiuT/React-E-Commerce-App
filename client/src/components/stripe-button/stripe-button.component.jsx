import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  clearCart
} from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Bzc2HvEUtsZebqzV9TiJJutY00NMnAA6KK';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        // history.push('/');
        clearCart();
        alert('succesful payment');
        history.push('/shop');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton));
