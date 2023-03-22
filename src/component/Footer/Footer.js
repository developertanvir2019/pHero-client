import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-gray-800">
            <div className="container mx-auto px-6 py-10">
                <div>
                    <p className="text-white text-3xl mb-3">Follow us on:</p>
                    <div className="ml-6 flex justify-center">
                        <Link href="#" className="text-white text-3xl mx-2"><AiFillFacebook /></Link>
                        <Link href="#" className="text-white text-3xl mx-2"><AiFillTwitterSquare></AiFillTwitterSquare></Link>
                        <Link href="#" className="text-white text-3xl mx-2"><AiOutlineInstagram></AiOutlineInstagram></Link>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-gray-400">© 2023 All Rights Reserved.</p>
                </div>
            </div>
        </div>


    );
};

export default Footer;