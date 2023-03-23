import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import useLearner from "./useLearner";

const LearnerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isLearner, isLoading] = useLearner(user?.email);
    const location = useLocation()

    if (loading || isLoading) {
        return <div className='flex justify-center items-center h-full my-32 pb-14'>
            <div className='w-8 h-8 border-4 border-dashed rounded-full animate-spin border-secondary'></div>
        </div>
    }

    if (user && isLearner) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default LearnerRoute;
