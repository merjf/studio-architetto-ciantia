import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Work from "./pages/Work";
import Contact from "./pages/Contact"
import About from "./pages/About";
import Project from "./pages/Project";
import projects from './assets/data/projects'
import { GroupModel, ProjectRandomGridModel } from "./utils/Utils";

const App = () => {

    const projectLoader = (id: number) => {
        var groups: GroupModel[] = projects;
        var projectSelected: ProjectRandomGridModel = undefined, i = 0;
        for(let group of groups){
            for(let project of group.projects){
            }
        }
        return projectSelected;
    }

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
        }, {
            path: "project/:id",
            element: <Project />,
            loader: ({ params }) => {
                var groups: GroupModel[] = projects;
                for(let group of groups){
                    for(let project of group.projects){
                        if(project.id == params.id){
                            return {
                                id: (project as any).id,
                                mainFolder: (project as any).mainFolder,
                                cover: (project as any).cover,
                                title: (project as any).title,
                                description: (project as any).description,
                                orientation: (project as any).orientation,
                                place: (project as any).city,
                                order: (project as any).order,
                            }
                        }
                    }
                }
            },
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
