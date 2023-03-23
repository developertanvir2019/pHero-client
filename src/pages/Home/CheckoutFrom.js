import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutFrom = () => {
    const [cardError, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
        }
        else {
            setError('')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button className='btn btn-sm mt-4 btn-secondary' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
        </>
    );
};

export default CheckoutFrom;