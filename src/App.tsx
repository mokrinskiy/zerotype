import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Layout = () => {
    return (
        <div className="px-4">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
