import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Premiumlesson = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://p-hero-task-server.vercel.app/premium')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Premium Packages
                </h1>
                <div className="flex flex-wrap justify-center">
                    {/* Card 1 */}
                    {
                        courses?.map(course =>
                            <div key={course?._id} className="w-full max-w-sm lg:mx-20 rounded-lg shadow-md overflow-hidden">
                                <div
                                    className="flex justify-center items-center h-52 bg-gray-400"
                                    style={{
                                        backgroundImage: `url(${course?.imgUrl})`,
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                </div>
                                <div className="px-2 py-3">
                                    <h3 className="text-2xl text-secondary font-semibold text-start">
                                        {course?.course}
                                    </h3>
                                    <p className='text-gray-700'>{course?.description}</p>
                                    <div className="flex items-center justify-between pt-8">
                                        <h3 className="text-lg font-bold">{course?.price}</h3>
                                        <Link to={`/payment/${course?._id}`} className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Premiumlesson;