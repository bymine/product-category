import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import Layout from "./components/layout/Layout";
import Product from "./pages/products/Product";
import Order from "./pages/order/Order";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Product />,
        },
        {
          path: "/order",
          element: <Order />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
