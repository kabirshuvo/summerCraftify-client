import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import App from "../layout/App";






export const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

