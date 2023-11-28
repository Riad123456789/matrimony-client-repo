import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../Login/LoginPage";
import RegisterPage from "../Register/RegisterPage";
import DashboardLayout from "../layout/DashboardLayout";
import EditBioData from "../DashboardPage/NoemalUserPages/EditBioData";
import ViewBiodata from "../DashboardPage/NoemalUserPages/ViewBiodata";
import MyContactRequestPage from "../DashboardPage/NoemalUserPages/MyContactRequestPage";
import FavoritPage from "../DashboardPage/NoemalUserPages/FavoritPage";
import GotMarriedPage from "../DashboardPage/NoemalUserPages/GotMarriedPage";
import { getAlldata, getSingledata, } from "../Api/Biodata";
import AllBiodata from "../AllBiodataPage/AllBiodata";
import SingleDatapage from "../AllBiodataPage/AllBiodataCard/SingleDataCard/SingleDatapage";
import CheckoutPage from "../AllBiodataPage/CheckoutPage/CheckoutPage";
import ContuctsReqPage from "../DashboardPage/AdminPages/contuctsReqPage";
import { getAllRequestInfo } from "../Api/payment";
import ManageUsersPage from "../DashboardPage/AdminPages/ManageUsersPage";




const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
    {
        path: '/allbiodata',
        element: <AllBiodata></AllBiodata>,
        loader: () => getAlldata()
    },
    {
        path: '/singlebiodata/:id',
        element: <SingleDatapage></SingleDatapage>,
        loader: ({ params }) => getSingledata(params.id)
    },
    {
        path: '/Checkout/:Biodataid',
        element: <CheckoutPage></CheckoutPage>,
        loader: ({ params }) => getAlldata(params.Biodataid)
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
        path: '/dashboardLayout',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'EditBioData',
                element: <EditBioData></EditBioData>,
            },
            {
                path: 'ViewBiodata',
                element: <ViewBiodata></ViewBiodata>,
                loader: () => getAlldata()
            },
            {
                path: 'MyContactRequest',
                element: <MyContactRequestPage></MyContactRequestPage>,
            },
            {
                path: 'FavouritesBiodata',
                element: <FavoritPage></FavoritPage>,
            },
            {
                path: 'GotMarried',
                element: <GotMarriedPage></GotMarriedPage>,
            },


            // adminroutes............................>

            {
                path: 'ApprovedContact',
                element: <ContuctsReqPage></ContuctsReqPage>,
                loader: () => getAllRequestInfo()
            },
            {
                path: 'ManageUsers',
                element: <ManageUsersPage></ManageUsersPage>,
            }
        ]
    }
]);


export default Router