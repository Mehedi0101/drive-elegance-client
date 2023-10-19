import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../pages/BrandProducts";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/brands'),
                element: <Home></Home>
            },
            {
                path: '/brands/:name',
                loader: ({params}) => fetch(`http://localhost:5000/products-brand/${params.name}`),
                element: <BrandProducts></BrandProducts>
            },
            {
                path: '/product-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/products-id/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
        ]
    }
])

export default router;