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
import Mytoys from "../components/pages/myToy/Mytoys";

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/add_toy",
        element: (
          <PrivateRoutes>
            <Addtoys />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my_toys",
        element: (
          <PrivateRoutes>
            <Mytoys />
          </PrivateRoutes>
        ),
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
