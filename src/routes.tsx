import Home from "./pages/Home/Home";
import Completed from "./pages/Completed/Completed";
import Pending from "./pages/Pending/Pending";
import AddTodo from "./pages/AddTodo/AddTodo";

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/completed", element: <Completed /> },
    { path: "/pending", element: <Pending /> },
    { path: "/add", element: <AddTodo /> },
];
