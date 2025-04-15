import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Pending from "./pages/Pending";
import AddTodo from "./pages/AddTodo";
import EditTodoPage from "./pages/EditTodo";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/completed",
        element: <Completed />,
    },
    {
        path: "/pending",
        element: <Pending />,
    },
    {
        path: "/add",
        element: <AddTodo />,
    },
    {
        path: "/edit/:id",
        element: <EditTodoPage />,
    },
];

export default routes;
