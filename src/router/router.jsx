import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../pages/BrandProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import ProductUpdate from "../pages/ProductUpdate";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://drive-elegance-serverside-azure.vercel.app/brands'),
                element: <Home></Home>
            },
            {
                path: '/brands/:name',
                loader: ({params}) => fetch(`https://drive-elegance-serverside-azure.vercel.app/products-brand/${params.name}`),
                element: <BrandProducts></BrandProducts>,
            },
            {
                path: '/product-details/:id',
                loader: ({params}) => fetch(`https://drive-elegance-serverside-azure.vercel.app/products-id/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/product-update/:id',
                loader: ({params}) => fetch(`https://drive-elegance-serverside-azure.vercel.app/products-id/${params.id}`),
                element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>
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
            },
            {
                path: '/cart',
                loader: () => fetch('https://drive-elegance-serverside-azure.vercel.app/products/'),
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            }
        ]
    }
])

export default router;