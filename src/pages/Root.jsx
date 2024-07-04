import { Link, Outlet , NavLink } from "react-router-dom"
export const Root = () => {
    return <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">Composers</NavLink>
            <NavLink to="add">Add</NavLink>
        </nav>
        <div className="container">
            <Outlet />
        </div>
    </>
}