import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

export default function SecondaryHomepage() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
