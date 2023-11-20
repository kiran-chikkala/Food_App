import "./App.css";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Shemmer from "./components/Shemmer";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
const AboutUS = lazy(() => import("./components/AboutUS"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shemmer />}>
            <AboutUS />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
