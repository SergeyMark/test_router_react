import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
                <li><NavLink to='/registr'>Registration</NavLink></li>
                <li><NavLink to='/login'>LogIn</NavLink></li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
}

export default Layout;