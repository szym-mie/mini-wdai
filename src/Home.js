import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (<div>
        <h1>Estore</h1>
        <Link to={"category/2"}>go to 2</Link>
        <Outlet/>
    </div>)
}