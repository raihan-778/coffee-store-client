import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/addCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/updateCoffee/UpdateCoffee.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch(`http://localhost:5000/api/v1/coffes`),
    children: [],
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/api/v1/coffes/${params.id}`),
  },
  { path: "/add-coffee", element: <AddCoffee></AddCoffee> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
