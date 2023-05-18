import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/pages/home/Home";
import Alltoys from "../components/pages/allToys/Alltoys";
import Toy from "../components/pages/toy/Toy";
import Addtoys from "../components/pages/addToys/Addtoys";
import Login from "../components/pages/login/Login";
import Signup from "../components/pages/signup/Signup";
import Error from "../components/pages/error/Error";
import { toysLoader } from "../components/loader/DataLoader";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: toysLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all_toys",
        element: <Alltoys />,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoutes>
            <Toy />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add_toy",
        element: <Addtoys />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
