import { Link } from "react-router-dom"

export default function ProductTile({ id, title, price }) {
    return (
        <Link to={ "/product/" + id }>
            <div>
                <h2>{ title }</h2>
                <h4>{ price } USD</h4>
            </div>
        </Link>
    )
}