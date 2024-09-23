import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskManager from "../pages/TaskManager";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <TaskManager />
    },
    {
        path: '/login',
        element: <Login />
    }, 
    {
        path: '/register',
        element: <Register />
    }
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes;