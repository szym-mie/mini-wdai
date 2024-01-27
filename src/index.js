import React from "react"
import ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Home from "./Home"
import CategoryView, { categoryLoader } from "./CategoryView"
import ProductView, { productLoader } from "./ProductView"

const router = createBrowserRouter([
    {
        path: "/",
        id: "home",
        element: <Home />,
        children: [{
            path: "category/:id",
            id: "category",
            element: <CategoryView />,
            loader: categoryLoader
        }, {
            path: "product/:id",
            id: "product",
            element: <ProductView />,
            loader: productLoader
        }]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
