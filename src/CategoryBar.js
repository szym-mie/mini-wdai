import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function CategoryBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(json => setCategories(json))
    }, [setCategories])

    return (
        <div>
            { categories.map(category => 
                (<Link 
                    key={ category } 
                    to={ 'category/' + category }>{ category }</Link>)
            ) }
        </div>
    )
}
