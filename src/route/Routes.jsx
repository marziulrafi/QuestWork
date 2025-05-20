import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import AddTask from "../pages/AddTask";
import BrowseTasks from "../pages/BrowseTasks";
import MyTasks from "../pages/MyTasks";
import TaskDetails from "../pages/TaskDetails";
import UpdateTask from "../pages/UpdateTask";

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
                path: "/add-task",
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: "/browse-tasks",
                element: <PrivateRoute><BrowseTasks /></PrivateRoute>
            },
            {
                path: "/my-posted-tasks",
                element: <PrivateRoute><MyTasks /></PrivateRoute>
            },
            {
                path: "/task/:id",
                element: <PrivateRoute><TaskDetails /></PrivateRoute>
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateTask /></PrivateRoute>
            }
        ]
    },
]);

export default router;
