import { createBrowserRouter, RouterProvider } from "react-router-dom";
// importing components
import { Homepage, SecondaryHomepage } from "./pages";

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
    {
        path: "home",
        element: <SecondaryHomepage/>
    }
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}
