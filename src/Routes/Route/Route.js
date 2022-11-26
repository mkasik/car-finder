import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddCar from "../../Pages/AddCar/AddCar";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Category from "../../Pages/Category/Category/Category";
import Welcome from "../../Pages/Dashboard/Welcome";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import MyBuyers from "../../Pages/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Products from "../../Pages/Products/Products/Products";
import Register from "../../Pages/Register/Register/Register";


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
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)


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

        ]
    }

])