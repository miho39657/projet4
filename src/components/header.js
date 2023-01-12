import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css';


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/albums">Albums</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/todos">Todos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        <Outlet />
        </>
    )
};

export default Header;