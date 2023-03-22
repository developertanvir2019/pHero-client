import React from 'react';

const Feature = () => {
    return (
        <div>
            <section className="bg-white py-8">
                <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        Featured Riders
                    </h1>
                    <div className="flex flex-wrap justify-center">
                        {/* Card 1 */}
                        <div className="w-full max-w-sm lg:mx-20 rounded-lg shadow-md overflow-hidden">
                            <div
                                className="flex justify-center items-center h-56 bg-gray-400"
                                style={{
                                    backgroundImage: `url("https://img.freepik.com/premium-photo/moto-rider-making-stunt-his-motorbike-motorcycle-stunt-riding_756317-284.jpg?w=2000")`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <span className="text-white font-bold uppercase text-xl">
                                    Carlos Robarto
                                </span>
                            </div>
                            <div className="px-2 py-3">
                                <h3 className="text-gray-700 uppercase">
                                    About me
                                </h3>
                                <p className="text-gray-500 text-sm mt-2">
                                    I'm a passionate bike rider who loves nothing more than hitting the
                                    road and feeling the wind in my face. From cruising through city streets
                                    to tackling rugged mountain trails, I'm always up for a new biking adventure.
                                    I've spent countless hours on two wheels, building up my endurance and testing my
                                    limits. For me, there's nothing quite like the sense of freedom and exhilaration that comes
                                    with riding a bike.


                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full max-w-sm lg:mx-20 rounded-lg shadow-md overflow-hidden">
                            <div
                                className="flex justify-center items-center h-56 bg-gray-400"
                                style={{
                                    backgroundImage: `url("https://img.etimg.com/thumb/msid-73167960,width-640,resizemode-4,imgsize-709658/vision-avtr.jpg")`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <span className="text-white font-bold uppercase text-xl">
                                    Tanvir Ahmed
                                </span>
                            </div>
                            <div className="px-2 py-3">
                                <h3 className="text-gray-700 uppercase">
                                    About me
                                </h3>
                                <p className="text-gray-500 text-sm mt-2">
                                    As a dedicated car rider, I've spent countless hours behind the wheel
                                    navigating busy city streets and long stretches of highway. Whether I'm commuting
                                    to work, running errands, or simply going for a scenic drive, I've always enjoyed the
                                    sense of freedom and independence that comes with driving. Over the years, I've honed my skills
                                    as a driver and learned how to navigate challenging road conditions with confidence and ease.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;