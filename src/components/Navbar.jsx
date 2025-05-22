import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const links = (
        <>
            <li><NavLink to="/" className="font-semibold">Home</NavLink></li>
            <li><NavLink to="/add-task" className="font-semibold">Add Task</NavLink></li>
            <li><NavLink to="/browse-tasks" className="font-semibold">Browse Tasks</NavLink></li>
            <li><NavLink to="/my-tasks" className="font-semibold">My Posted Tasks</NavLink></li>
            {!user && (
                <>
                    <li><NavLink to="/register" className="font-semibold">Register</NavLink></li>
                    <li><NavLink to="/login" className="font-semibold">Login</NavLink></li>
                </>
            )}
        </>
    );

    const authLinksDesktop = (
        <>
            <li><NavLink to="/register" className="font-semibold">Register</NavLink></li>
            <li><NavLink to="/login" className="font-semibold">Login</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">

            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <img src={logo} className="w-14 h-14" alt="Marketplace Logo" />
                <Link to="/" className="btn btn-ghost text-xl font-bold">QuestWork</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-hover dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="User Avatar" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li><span className="font-semibold">{user.displayName}</span></li>
                            <li><button onClick={logOut} className="font-semibold">Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {authLinksDesktop}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
