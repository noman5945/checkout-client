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
        path: "/restaurant/:id",
        element: <RestaurantPage></RestaurantPage>,
        loader: async ({ params }) =>
          await fetch(
            `http://localhost:5000/restaurentDetails?id=${params.id}`
          ),
        children: [
          {
            path: "/restaurant/:id",
            element: <Feed></Feed>,
          },
          {
            path: "/restaurant/:id/About",
            element: <About></About>,
          },
          {
            path: "/restaurant/:id/Menu",
            element: <Menu></Menu>,
          },
          {
            path: "/restaurant/:id/Photos",
            element: <Photos></Photos>,
          },
          {
            path: "/restaurant/:id/Reviews",
            element: <Reviews></Reviews>,
          },
        ],
      },
    ],
  },
]);
