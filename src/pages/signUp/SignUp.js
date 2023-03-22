import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LearnerSignUp from './LearnerSignUp';
import RiderSignUp from './RiderSignUp';

const SignUp = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <div className="max-w-sm mx-auto">
                <h2 className="text-3xl font-bold my-3 text-secondary">Registration as a-</h2>
                <div className='lg:flex lg:gap-4 text-lg font-semibold'>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="rider"
                            value="rider"
                            checked={selectedOption === "rider"}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-gray-600"
                        />
                        <label htmlFor="rider" className="ml-2">
                            Rider
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="learner"
                            value="learner"
                            checked={selectedOption === "learner"}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-gray-600"
                        />
                        <label htmlFor="learner" className="ml-2">
                            Driving Lesson Learner
                        </label>
                    </div>
                </div>
            </div>
            {
                selectedOption === 'rider' && <RiderSignUp></RiderSignUp>
            }
            {
                selectedOption === 'learner' && <LearnerSignUp></LearnerSignUp>
            }
        </div>
    );
};

export default SignUp;