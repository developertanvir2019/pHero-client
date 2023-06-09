import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Others/AuthProvider';
const Profile = () => {
    const [allUser, setAllUser] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://p-hero-task-server.vercel.app/allUsers')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [user])
    const currentUser = allUser?.users?.find(us => us?.email === user?.email);
    return (
        <div className="flex flex-col items-center justify-center pt-8 mb-32">
            <img src={currentUser?.images[1]} alt='' className="w-32 h-32 rounded-full mb-4" />
            <h2 className="text-xl font-bold text-secondary">{currentUser?.name}</h2>
            <p className="text-gray-600 mb-4">{currentUser?.email}</p>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-2 tex-secondary">Personal Information</h3>
                    <p className="text-gray-600 mb-1">Age: {currentUser?.age}</p>
                    <p className="text-gray-600 mb-1">Address: {currentUser?.address}</p>
                    <p className="text-gray-600 mb-1">Phone: {currentUser?.phone}</p>
                    <p className="text-gray-600 mb-1">Area: {currentUser?.area}</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Driving Licence</h3>
                    <img src={currentUser?.images[2] ? currentUser?.images[2] : 'https://hbr.org/resources/images/article_assets/2018/01/jan18_11_Hayon-Thapaliya.jpg'} alt="Driving Licence" className="w-48 h-auto" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                    <h3 className="text-lg font-bold mb-2">National ID</h3>
                    <img src={currentUser?.images[0]} alt="National ID" className="w-48 h-auto" />
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Vehicle Information</h3>
                    <p className="text-gray-600 mb-1">Vehicle Type: {currentUser?.vehicleType}</p>
                    <p className="text-gray-600 mb-1">Model: {currentUser?.model}</p>
                    <p className="text-gray-600 mb-1">Plate Number: {currentUser?.plate}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;