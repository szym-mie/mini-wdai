import { Outlet } from "react-router-dom";
import CategoryBar from "./CategoryBar";

export default function Home() {
    return (
        <div>
            <h1>Estore</h1>
            <CategoryBar/>
            <Outlet/>
        </div>
    )
}