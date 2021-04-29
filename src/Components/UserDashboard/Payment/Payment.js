import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51IiG5gBDd7VhudXjoKrKy0lrXBfQs7fwdOCXNq0VIHQx5pYsetAVkV5AGQTCmQ2Y0THteMVsTlg1XK5gbr9Smbb600QSboTVgS');
const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

        </Elements>
    );
};

export default Payment;