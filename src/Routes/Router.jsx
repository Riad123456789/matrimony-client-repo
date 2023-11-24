import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../Login/LoginPage";
import RegisterPage from "../Register/RegisterPage";
import Dashboard from "../layout/Dashboard";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <RegisterPage></RegisterPage>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
]);


export default Router