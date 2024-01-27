import React from "react"
import ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Home from "./Home"
import CategoryView from "./CategoryView"
import ProductView from "./ProductView"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [{
            path: "category/:id",
            element: <CategoryView />
        }, {
            path: "product/:id",
            element: <ProductView />
        }]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
