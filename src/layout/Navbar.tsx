import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="navbar-brand text-white text-xl font-bold">
                    Advertising Monitor
                </a>
                <div className="navbar-links">
                    <a href="/" className="nav-link text-white">
                        Home
                    </a>
                    <a href="/about" className="nav-link text-white">
                        About
                    </a>
                    <a href="/contact" className="nav-link text-white">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
