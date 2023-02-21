import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts"
import { Container } from "@mui/material";
import About from "./pages/About";

const App = () => {

    const router = createBrowserRouter([{
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [{
            path: "/",
            element: <Home />,
        },{
            path: "/about",
            element: <About />,
        },{
            path: "/work",
            element: <Portfolio />,
        },{
            path: "/contact",
            element: <Contacts />,
        }],
    }]);

    return (
        <RouterProvider router={router} />
    )
}

export default App;
