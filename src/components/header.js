import React from "react";
import { Outlet, Link } from "react-router-dom";


const Header = () => {
    return (
        <>
        <nav>
            <ul>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/albums">Albums</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/todos">Todos</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
};

export default Header;