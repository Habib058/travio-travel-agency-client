import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe('pk_test_51JS6H8EYPmLgrhcdSwPcTkpIPO2UMmGO922zhxA0T3iH76QeqeNOhCgvKqLk1Gr40TqX7Dd58RsXfiFh6umCVI1l00C8nVgk0N');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
           <PaymentForm handlePayment={handlePayment}></PaymentForm>
        </Elements>
    );
};

export default ProcessPayment;