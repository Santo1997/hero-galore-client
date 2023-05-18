import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/pages/home/Home";
import { toysLoader } from "../components/loader/DataLoader";
import Alltoys from "../components/pages/allToys/Alltoys";

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
        path: "/",
        element: <Alltoys />,
      },
    ],
  },
]);

export default router;
