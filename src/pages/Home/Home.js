import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Others/AuthProvider';
import Feature from './Feature';
import Premiumlesson from './Premiumlesson';

const Home = () => {
    const [allUser, setAllUser] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [])
    const currentUser = allUser?.users?.find(us => us?.email === user?.email);
    return (
        <div>
            <div className="bg-gray-100">
                {/* Hero Section */}
                <section className="bg-gray-800 py-16">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-2 text-white">
                            Find the Perfect Ride
                        </h2>
                        <h3 className="text-2xl mb-8 text-gray-200">
                            We connect you to the best riders around
                        </h3>
                        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                            Get started
                        </button>
                    </div>
                </section>
                {
                    currentUser?.role === 'learner' ? <Premiumlesson></Premiumlesson> : <Feature></Feature>
                }


            </div>
        </div>
    );
};

export default Home;