import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HeEtvHZMLMm9QtJKu8Z7WpMIKnHKQMzEeYlqMb9eFWLeNqzJYq4KDzKHG0H6rD6Gn9YtdCAQncMAwR4NDodnfu800p69dBLWA';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;








