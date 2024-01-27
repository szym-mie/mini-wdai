import { useLoaderData } from "react-router-dom"
import ProductTile from "./ProductTile";

export default function CategoryView() {
    const { products } = useLoaderData()

    return (
        <div>
            { products.map(product => 
                (<ProductTile 
                    key={ product.id } 
                    id={ product.id } 
                    title={ product.title } 
                    price={ product.price } />))
            }
        </div>
    )
}

export async function categoryLoader({ params }) {
    const res = await fetch("https://dummyjson.com/products/category/" + params.id)
    const json = await res.json()
    return json
}