import { createBrowserRouter } from "react-router-dom";
import AllUser from "../pages/AllUser/AllUser";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Payment from "../pages/Home/Payment";
import Premiumlesson from "../pages/Home/Premiumlesson";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/signUp/SignUp";
import AdminRoute from "./Hooks/AdminRoute";
import LearnerRoute from "./Hooks/LearnerRoute";
import Main from "./layout/Main";
import PrivateRouter from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '/allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>

            },
            {
                path: '/premium',
                element: <LearnerRoute><Premiumlesson></Premiumlesson></LearnerRoute>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://p-hero-task-server.vercel.app/premium/${params?.id}`)
            },
        ]
    }
])
