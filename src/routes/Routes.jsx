import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import UserLogIn from "../Pages/AllUsers/UserLogIn/UserLogIn";
import UserRegistration from "../Pages/AllUsers/UserRegistration/UserRegistration";
import Dashboard from "../Pages/DashBoard/Dashboard/Dashboard";
import Enrole from "../Pages/Enrole/Enrole";
import Home from "../Pages/Home/Home/Home";
import NotFound404 from "../Pages/NotFound404/NotFound404";
import App from "../layout/App";
import PrivateRoute from "./PrivateRoute";






export const router = createBrowserRouter([
    // General Routs
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'instructors',
                element: <AllInstructors></AllInstructors>
            },
            
            {
                path: 'summerclasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'enrole/:categoryName',
                element: <Enrole></Enrole>
            },
            {
                path: 'login',
                element: <UserLogIn></UserLogIn>
            },
            {
                path: 'register',
                element: <UserRegistration></UserRegistration>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>

            }
        ]
    },
    // 404 universal Route
    {
        path: '*',
        element:<NotFound404></NotFound404>
    },
    // dashboard routes
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'admin'
            }
        ]
    }
    
])

