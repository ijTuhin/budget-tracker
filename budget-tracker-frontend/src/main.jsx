import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./authentication/LoginPage.jsx";
import UserContext from "./authentication/UserContext.jsx";
import Protected from "./authentication/Protected.jsx";
import ErrorPage from "./authentication/ErrorPage.jsx";
import "preline";
import PageNotFound from "./pages/PageNotFound.jsx";

const token = localStorage.getItem("user-token");
console.log(token);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Homepage />
      </Protected>
    ),
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
  },
  {
    path: "*",
    element: (
      <PageNotFound/>
    ),
    // errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
);
