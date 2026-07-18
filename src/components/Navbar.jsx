import { useState } from "react";

import {
    FaBars,
    FaTimes,
    FaDownload,
} from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <nav className="navbar">

            {/* LOGO */}
            <a
                href="#home"
                className="logo"
                onClick={closeMenu}
            >
                AQUIB<span>.</span>
            </a>


            {/* NAVIGATION */}
            <div
                className={`nav-links ${menuOpen ? "active" : ""
                    }`}
            >

                <a
                    href="#home"
                    onClick={closeMenu}
                >
                    Home
                </a>

                <a
                    href="#about"
                    onClick={closeMenu}
                >
                    About
                </a>


                <a
                    href="#skills"
                    onClick={closeMenu}
                >
                    Skills
                </a>

                <a
                    href="#experience"
                    onClick={closeMenu}
                >
                    Experience
                </a>

                <a
                    href="#projects"
                    onClick={closeMenu}
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    onClick={closeMenu}
                >
                    Contact
                </a>


                {/* RESUME BUTTON */}
                <a
                    href="/Aquib-Rizvi-Resume.pdf"
                    download="Aquib-Rizvi-Resume.pdf"
                    className="resume-btn"
                    onClick={closeMenu}
                >
                    <FaDownload />
                    Resume
                </a>

            </div>


            {/* MOBILE MENU */}
            <button
                className="menu-btn"
                onClick={() =>
                    setMenuOpen(!menuOpen)
                }
            >

                {menuOpen ? (
                    <FaTimes />
                ) : (
                    <FaBars />
                )}

            </button>

        </nav>

    );
}

export default Navbar;