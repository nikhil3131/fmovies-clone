import { createBrowserRouter, RouterProvider } from "react-router-dom";
// importing components
import { Homepage } from "./pages";

/*
************************************
all website routes are defined here
************************************
*/
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}
