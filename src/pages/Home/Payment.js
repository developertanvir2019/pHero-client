import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    return (
        <div>

            <div className="max-w-md mx-auto my-8">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className="text-2xl text-secondary py-2">Complete your Payment for <br />{data?.course}!!!</p>
                    <p className='text-xl font-semibold'>Payable amount- {data?.price}</p>

                    <label className="block text-gray-700 font-bold mb-2" htmlFor="card-element">
                        Credit or debit card
                    </label>
                    <div className="border rounded-md p-2">
                        {/* <CardElement id="card-element" /> */}
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
                        Pay
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Payment;