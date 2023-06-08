import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Restaurant from "../../Pages/RestaurantList/Restaurant";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/restaurantlist",
        element: <Restaurant></Restaurant>,
      },
    ],
  },
]);
