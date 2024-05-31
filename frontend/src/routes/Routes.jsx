import { createBrowserRouter } from "react-router-dom";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import ForgotPassword from "../pages/ForgotPassword";
// import ResetPassword from "../pages/ResetPassword";
import Dashboard from '../pages/Dashboard';
import Authenticated from './Authenticated';

export const router = createBrowserRouter([
    {
        path: "/",
        element: (<Authenticated><Dashboard /></Authenticated>),
    },
    // {
    //     path: "/login",
    //     element: <Login />,
    // },
    // {
    //     path:"/register",
    //     element: <Register />,
    // },
    // {
    //     path: "/forgot-password",
    //     element: <ForgotPassword />,
    // },
    // {
    //     path: "/:uid/:token",
    //     element: <ResetPassword />
    // }
]);