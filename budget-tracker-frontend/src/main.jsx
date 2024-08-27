import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./authentication/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // errorElement: <ErrorPage />,
    // loader: () => {
    //   return fetch(
    //     `http://localhost:3001/payment?month=${month}&item=meal`,
    //     {
    //       headers: { Authorization: `Beared ${token}` },
    //     }
    //   );
    // },
  },
  {
    path: "/signup",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
