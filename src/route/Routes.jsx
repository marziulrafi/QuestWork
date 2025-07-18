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
import NotFound from "../components/NotFound";
import TaskBids from "../pages/TaskBids";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";




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
                loader: () => fetch('https://quest-work-server.vercel.app/tasks'),
                element: <BrowseTasks />
            },
            {
                path: "/my-tasks",
                element: <PrivateRoute><MyTasks /></PrivateRoute>
            },
            {
                path: "/task/:id",
                loader: ({ params }) => fetch(`https://quest-work-server.vercel.app/tasks/${params.id}`),
                element: <PrivateRoute><TaskDetails /></PrivateRoute>
            },
            {
                path: "/update/:id",
                loader: ({ params }) => fetch(`https://quest-work-server.vercel.app/tasks/${params.id}`),
                element: <PrivateRoute><UpdateTask /></PrivateRoute>
            },
            {
                path: "/bids/:taskId",
                element: <PrivateRoute><TaskBids /></PrivateRoute>
            },
            {
                path: '/*',
                element: <NotFound />
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { path: 'overview', element: <Dashboard /> },
            { path: 'add-task', element: <AddTask /> },
            { path: 'my-tasks', element: <MyTasks /> },
            { path: 'browse-tasks', element: <BrowseTasks /> },
        ]
    }
]);

export default router;
