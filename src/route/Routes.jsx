import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },

            {
                path:"/add-task",
                element: <PrivateRoute>Add Task Page</PrivateRoute>
            },
            {
                path:"/browse-tasks",
                element: <PrivateRoute>Browse Tasks Page</PrivateRoute>
            },
            {
                path:"/my-posted-tasks",
                element: <PrivateRoute>My Tasks Page</PrivateRoute>
            }
        ]

    },
]);

export default router;