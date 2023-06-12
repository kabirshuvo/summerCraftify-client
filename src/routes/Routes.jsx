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
import InstructorHome from "../Pages/DashBoard/InstructorRoutes/InstructorHome";
import PaYments from "../Pages/DashBoard/PaYments/PaYments";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import SellectedClasses from "../Pages/DashBoard/SellectedClasses";
import UserHome from "../Pages/DashBoard/UserHome";
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
        path: 'payments',
        element: <PaYments></PaYments>
      },
      {
        path: 'paymenthistory',
        element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>
      },
      {
        path: "manageclasses",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      {
        path: "manageusers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },
     
      // Instructors section
      {
        path: "instructornhome",
        element: <InstructorHome></InstructorHome>
      },
      {
        path: "addnewcls",
        element:<AddNewClass></AddNewClass>
      },
      // Users Section
      {
        path: 'usershome',
        element: <UserHome></UserHome>
      },
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
