import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import CursHaqida from "../components/CursHaqida";
import Login from "../components/login";
import NotFound from "../components/not-found";
import Register from "../components/Register";
const root = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/curslar",
    element: <CursHaqida />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default root;

// {
//   path: "/succses",
//   element: <SuccsesComponents />,
// },
// {
//   path: "/register",
//   element: <Home />,
// },
