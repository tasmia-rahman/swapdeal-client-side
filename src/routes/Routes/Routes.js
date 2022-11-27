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
import MyProducts from "../../pages/Dashboard/Seller/MyProducts/MyProducts";
import MyOrders from "../../pages/Dashboard/Buyer/MyOrders/MyOrders";

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
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },

            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])