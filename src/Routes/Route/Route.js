import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddCar from "../../Pages/AddCar/AddCar";
import Category from "../../Pages/Category/Category/Category";
import Welcome from "../../Pages/Dashboard/Welcome";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
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
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: '/dashboard/addcard',
                element: <AddCar></AddCar>
            }
        ]
    }

])