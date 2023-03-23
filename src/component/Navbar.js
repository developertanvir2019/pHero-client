import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Others/AuthProvider';
import useAdmin from '../Others/Hooks/useAdmin';
import useLearner from '../Others/Hooks/useLearner';

const Navbar = () => {
    const { logout, user } = useContext(AuthContext)
    const [hidden, setHidden] = useState(false)
    const [isAdmin] = useAdmin(user?.email);
    const [isLearner] = useLearner(user?.email);
    return (
        <nav className="bg-blue-500">
            <div className="mx-auto px-4 py-2 max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex">
                        <Link to='/' className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" />
                            <span className="text-white ml-2 font-bold text-lg">Hero Rider</span>
                        </Link>
                        <div className="hidden lg:flex lg:ml-4">
                            <Link to='/' className="text-white hover:bg-blue-700 hover:text-gray-100 rounded-md py-2 px-3">Home</Link>
                            <Link to='/premium' className="text-white hover:bg-blue-700 hover:text-gray-100 rounded-md py-2 px-3">Premium Courses</Link>
                            {
                                isAdmin && <Link to='/allUser' className="text-white hover:bg-blue-700 hover:text-gray-100 rounded-md py-2 px-3">Registered User</Link>
                            }
                            <Link to='/profile' className="text-white hover:bg-blue-700 hover:text-gray-100 rounded-md py-2 px-3">Profile</Link>
                            {!user ?
                                <Link to='/login' className="text-white hover:bg-blue-700 hover:text-gray-100 rounded-md py-2 px-3">Login</Link> :
                                <Link onClick={() => logout()} className="text-white hover:bg-blue-700 hover:text-gray-100 rounded-md py-2 px-3">Logout</Link>
                            }
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center lg:hidden">
                        <button onClick={() => setHidden(!hidden)} type="button" className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" aria-controls="mobile-menu">
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {
                hidden &&
                <div className='lg:hidden' id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to='/' className="text-white hover:bg-blue-700 hover:text-gray-100 block rounded-md py-2 px-3">Home</Link>
                        <Link to='/premium' className="text-white hover:bg-blue-700 hover:text-gray-100 block rounded-md py-2 px-3">Premium Courses</Link>
                        {
                            isAdmin && <Link to='/allUser' className="text-white hover:bg-blue-700 block hover:text-gray-100 rounded-md py-2 px-3">Registered User</Link>
                        }
                        <Link to='/profile' className="text-white hover:bg-blue-700 block hover:text-gray-100 rounded-md py-2 px-3">Profile</Link>
                        {!user ?
                            <Link to='/login' className="text-white hover:bg-blue-700 block hover:text-gray-100 rounded-md py-2 px-3">Login</Link> :
                            <Link onClick={() => logout()} className="text-white hover:bg-blue-700 block hover:text-gray-100 rounded-md py-2 px-3">Logout</Link>
                        }
                    </div>
                </div>
            }
        </nav>


    );
};

export default Navbar;