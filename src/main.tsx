import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create } from "./pages/create.tsx";
import { NotFound } from "./pages/404.tsx";
import { All } from "./pages/all.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Create />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/all",
    element: <All />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
