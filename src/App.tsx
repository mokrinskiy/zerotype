import { Outlet, RouterProvider } from "react-router";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppContainer from "./layouts/AppContainer";

const Layout = () => {
    return (
        <AppContainer>
            <NavBar />
            <Outlet />
            <Footer />
        </AppContainer>
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
