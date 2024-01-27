import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductView() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch("https://dummyjson.com/products/" + id)
        .then(res => res.json())
        .then(json => setProduct(json))
    }, [setProduct, id])

    return (
        <div>{product.title}</div>
    )
}
