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
            <li><NavLink to="/browse-tasks" className="font-semibold">Browse Tasks</NavLink></li>
            <li><NavLink to="/about" className="font-semibold">About Us</NavLink></li>
            <li><NavLink to="/contact" className="font-semibold">Contact</NavLink></li>
            <li><NavLink to="/support" className="font-semibold">Support</NavLink></li>
        </>
    );

    const authLinks = (
        <>
            <li><NavLink to="/register" className="font-semibold">Register</NavLink></li>
            <li><NavLink to="/login" className="font-semibold">Login</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-sky-600 text-primary-content px-4 lg:px-16">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-base-content mt-3 p-2 shadow rounded-box w-52 z-[100]"
                        >
                            {links}
                            {!user && authLinks}
                        </ul>
                    </div>
                    <img src={logo} className="w-12 h-12" alt="Logo" />
                    <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">QuestWork</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <label className="swap swap-rotate mr-4">
                        <input type="checkbox" onChange={handleThemeToggle} checked={isDarkMode} />

                        <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.75 15.5A9 9 0 0112 3a9 9 0 109.75 12.5z" />
                        </svg>

                        <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-9v2m0 14v2m9-9h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m0-13.66l1.41 1.41m10.32 10.32l1.41 1.41" />
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
                                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-base-content rounded-box w-52"
                            >
                                <li><span className="font-semibold">{user.displayName}</span></li>
                                <li><button onClick={logOut} className="font-semibold">Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <ul className="menu menu-horizontal hidden lg:flex">
                            {authLinks}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
