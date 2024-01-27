import { Link, Outlet } from "react-router-dom";
import CategoryBar from "./CategoryBar";

export default function Home() {
    return (
        <div>
            <h1>Estore</h1>
            <CategoryBar/>
            <Link to={"category/2"}>go to 2</Link>
            <Outlet/>
        </div>
    )
}