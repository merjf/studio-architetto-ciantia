import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Work from "./pages/Work";
import Contact from "./pages/Contact"
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
            element: <Work />,
        },{
            path: "/contact",
            element: <Contact />,
        }],
    }]);

    return (
        <RouterProvider router={router}/>
    )
}

export default App;
