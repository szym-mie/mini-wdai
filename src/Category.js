import { Link, useParams } from "react-router-dom";

export default function Category() {
    const { id } = useParams();
    console.log(id);
    return (<div><h2>{id}</h2></div>)
}