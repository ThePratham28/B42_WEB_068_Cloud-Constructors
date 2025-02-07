import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">EventManager</div>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <ul>
                    {["Home", "Events", "Contact"].map((item, index) => (
                        <li key={index}>
                            <Link to={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;
