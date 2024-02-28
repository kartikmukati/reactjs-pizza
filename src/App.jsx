import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from './ui/Home'
import Error from './ui/Error';
import Menu, {loader as menuLoader} from './features/menu/Menu';
import Cart from './features/cart/Cart'
import CreateOrder, {action as createOrderAction} from './features/order/CreateOrder'
import Order, {loader as orderLoader} from './features/order/Order'
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ]
  }

])

export default function App() {
 return (
  <RouterProvider router={router}></RouterProvider>
 )
}
