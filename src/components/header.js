import React from "react";
import { Outlet, Link } from "react-router-dom";


const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/albums">Albums</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/posts">Posts</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/todos">Todos</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
};

export default Header;