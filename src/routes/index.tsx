import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layout";
import { Error404Page } from "../pages";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout compressedNav />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "",
        index: true,
        element: <HomePage />,
      },
    ],
  },

  {
    path: "how-it-works",
    element: <PublicLayout />,
    errorElement: <Error404Page />,
  },
  {
    path: "campaigns",
    element: <PublicLayout />,
  },
]);

export default router;
