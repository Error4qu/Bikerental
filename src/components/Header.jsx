import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="top-0">
    <nav className="bg-slate-700 fixed top-0 left-0 w-full px-4 lg:px-6 py-2.5 z-50 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
                <img
                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                    className="mr-3 h-12"
                    alt="Logo"
                />
            </Link>
            <div className="flex justify-between lg:order-2">
                <Link
                    to="#"
                    className="text-white bg-orange-600 hover:bg-green-700 focus:ring-2 focus:ring-gray-300
                    font-medium rounded-lg text-md px-6 lg:px-7 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    log in
                </Link>
                <Link
                    to="#"
                    className="text-white bg-orange-600 focus:ring-1 border-emerald-50 border-2 focus:ring-white font-medium rounded-full text-md px-7 lg:px-8 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Bangalore
                </Link>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tnc"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Terms and Condition
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

    );
}