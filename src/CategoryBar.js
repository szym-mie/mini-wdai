import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function CategoryBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
        .then(res => res.json())
        .then(json => setCategories(json))
    }, [setCategories])

    return (
        <div>
            { categories.map(id => 
                (<Link 
                    key={ id } 
                    to={ "/category/" + id }>{ id }</Link>)
            ) }
        </div>
    )
}
