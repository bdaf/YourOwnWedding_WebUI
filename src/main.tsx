import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AllSEOffers from "./pages/AllSEOffers.tsx";
import NewSEOffers from "./pages/NewSEOffers.tsx";
import Favourites from "./pages/Favourites.tsx";
import ErrorPage from "./ErrorPage.tsx";
import App from "./App.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>Siema</h1>,
      },
      {
        path: "se-offers",
        element: <AllSEOffers />,
      },
      {
        path: "se-offers/new",
        element: <NewSEOffers />,
      },
      {
        path: "se-offers/favourites",
        element: <Favourites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
