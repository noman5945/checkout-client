import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Restaurant from "../../Pages/RestaurantList/Restaurant";
import RestaurantPage from "../../layouts/RestaurantPage";
import Feed from "../../Pages/RestaurantPageComps/Feed/Feed/Feed";
import About from "../../Pages/RestaurantPageComps/About/About";
import Menu from "../../Pages/RestaurantPageComps/Menu/Menu";
import Photos from "../../Pages/RestaurantPageComps/Photos/Photos";
import Reviews from "../../Pages/RestaurantPageComps/Reviews/Reviews";

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
      {
        path: "/restaurant",
        element: <RestaurantPage></RestaurantPage>,
        children: [
          {
            path: "/restaurant",
            element: <Feed></Feed>,
          },
          {
            path: "/restaurant/About",
            element: <About></About>,
          },
          {
            path: "/restaurant/Menu",
            element: <Menu></Menu>,
          },
          {
            path: "/restaurant/Photos",
            element: <Photos></Photos>,
          },
          {
            path: "/restaurant/Reviews",
            element: <Reviews></Reviews>,
          },
        ],
      },
    ],
  },
]);
