import { useLoaderData } from "react-router-dom"

export default function ProductView() {
    const { title } = useLoaderData()

    return (
        <div>{title}</div>
    )
}

export async function productLoader({ params }) {
    const res = await fetch("https://dummyjson.com/products/" + params.id)
    const json = await res.json()
    return json
}