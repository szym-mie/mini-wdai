import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ProductTile from "./ProductTile";

export default function CategoryView() {
    const { id } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts([])
        fetch("https://dummyjson.com/products/category/" + id)
        .then(res => res.json())
        .then(json => setProducts(json.products))
    }, [setProducts, id])

    return (
        <div>
            { products.map(product => 
                (<ProductTile 
                    key={ product.id } 
                    id={ product.id } 
                    title={ product.title } 
                    price={ product.price }/>))
            }
        </div>
    )
}