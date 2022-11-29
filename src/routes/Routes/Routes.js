import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blog from "../../pages/Blog/Blog/Blog";
import Error from "../../pages/Error/Error/Error";
import Register from "../../pages/Login/Register/Register";
import Login from "../../pages/Login/Login/Login";
import Products from "../../pages/Products/Products/Products";
import DashboardLayout from "../../layout/DashboardLayout";
import AllSellers from "../../pages/Dashboard/Admin/AllSellers/AllSellers";
import AllBuyers from "../../pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AddProduct from "../../pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../../pages/Dashboard/Seller/MyProducts/MyProducts";
import MyOrders from "../../pages/Dashboard/Buyer/MyOrders/MyOrders";
import Payment from "../../pages/Dashboard/Payment/Payment";
import ReportedItems from "../../pages/Dashboard/Admin/ReportedItems/ReportedItems";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://swapdeal-server.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://swapdeal-server.vercel.app/booking/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])