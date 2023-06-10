import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import UserLogIn from "../Pages/AllUsers/UserLogIn/UserLogIn";
import UserRegistration from "../Pages/AllUsers/UserRegistration/UserRegistration";
import AddNewClass from "../Pages/DashBoard/AddNewClass/AddNewClass";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers";
import Enrolled from "../Pages/DashBoard/Enrolled";
import SellectedClasses from "../Pages/DashBoard/SellectedClasses";
import Enrole from "../Pages/Enrole/Enrole";
import Home from "../Pages/Home/Home/Home";
import NotFound404 from "../Pages/NotFound404/NotFound404";
import App from "../layout/App";
import DashBoard from "../layout/DashBoard";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  // General Routs
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "instructors",
        element: <AllInstructors></AllInstructors>,
      },

      {
        path: "summerclasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "enrole/:categoryName",
        element: <Enrole></Enrole>,
      },
      {
        path: "login",
        element: <UserLogIn></UserLogIn>,
      },
      {
        path: "register",
        element: <UserRegistration></UserRegistration>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
      },
    ],
  },
  // 404 universal Route
  {
    path: "*",
    element: <NotFound404></NotFound404>,
  },
  // dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      // Admin section
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageclasses",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      {
        path: "manageusers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },
      {
        path: "addnewcls",
        element:<AdminRoute><AddNewClass></AddNewClass></AdminRoute>
      },
      // Users Section
      {
        path: "enroled",
        element: <Enrolled></Enrolled>,
      },
      {
        path: "sellectedclasses",
        element: <SellectedClasses></SellectedClasses>,
      },
    ],
  },
]);
