import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setIsDarkMode(savedTheme === 'dark');
    }, []);

    const handleThemeToggle = (e) => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        setIsDarkMode(e.target.checked);
    };

    const links = (
        <>
            <li><NavLink to="/" className="font-semibold">Home</NavLink></li>
            <li><NavLink to="/add-task" className="font-semibold">Add Task</NavLink></li>
            <li><NavLink to="/browse-tasks" className="font-semibold">Browse Tasks</NavLink></li>
            <li><NavLink to="/my-tasks" className="font-semibold">My Posted Tasks</NavLink></li>
        </>
    );

    const authLinks = (
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

                <label className="flex cursor-pointer gap-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input
                        type="checkbox"
                        className="toggle theme-controller"
                        onChange={handleThemeToggle}
                        checked={isDarkMode}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>

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
                        {authLinks}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
