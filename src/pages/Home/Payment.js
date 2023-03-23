import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';
const stripePromise = loadStripe('pk_test_51M6AoIBSIlSsQgf2OlG5Vk0G8Y2lZfviCeidT0uD67RiiGjNRwpzho0jeUeVCQm21EWfw9x1kbRyrgnBsJ225Mxq00exB8m28L');
const Payment = () => {
    const data = useLoaderData()
    return (
        <div className='mb-20'>

            <div className="max-w-md mx-auto my-8">
                <p className="text-2xl text-secondary py-2">Complete your Payment for <br />{data?.course}!!!</p>
                <p className='text-xl font-semibold'>Payable amount- {data?.price}</p>
            </div>
            <div className='w-96 mx-auto bg-base-200 py-16 px-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom data={data} ></CheckoutFrom>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;