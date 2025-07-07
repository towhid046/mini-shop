import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/HomePage/HomePage";
import App from "../layout/App";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/product-details/:productId",
        element: <ProductDetailsPage />,
        loader: async ({ params }) =>
          fetch(
            `${import.meta.env.VITE_SERVER_URL}/products/${params.productId}`
          ),
      },
    ],
  },
]);

export default routes;
