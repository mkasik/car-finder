import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddCar from "../../Pages/AddCar/AddCar";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Welcome from "../../Pages/Dashboard/Welcome";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import MyBuyers from "../../Pages/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import NotFound from "../../Pages/NotFound/NotFound";
import Pay from "../../Pages/Pay/Pay";
import Products from "../../Pages/Products/Products/Products";
import Register from "../../Pages/Register/Register/Register";
import ReportedItem from "../../Pages/ReportedItem/ReportedItem";


import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/home',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>,

            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-server-snowy.vercel.app/category/${params.id}`)


            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: '/dashboard/addcard',
                element: <AddCar></AddCar>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reporteditem',
                element: <ReportedItem></ReportedItem>
            },
            {
                path: '/dashboard/pay/:id',
                element: <Pay></Pay>,
                loader: ({ params }) => fetch(`https://car-server-mkasik.vercel.app/booking/${params.id}`)
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }

])