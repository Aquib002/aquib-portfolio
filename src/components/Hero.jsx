import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaEye,
    FaDownload,
    FaArrowDown,
} from "react-icons/fa";

function Hero() {
    return (
        <section id="home" className="hero">

            {/* Background Glow */}
            <div className="hero-background"></div>

            {/* LEFT CONTENT */}
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >

                <p className="hero-intro">
                    HELLO, I'M
                </p>

                {/* FULL YELLOW NAME */}
                <h1 className="hero-name">
                    AQUIB RIZVI
                </h1>

                {/* FULL YELLOW TITLE */}
                <h2 className="hero-title">
                    FULL STACK DEVELOPER
                </h2>

                <p className="hero-description">
                    I build modern, responsive and scalable web applications
                    using React, Node.js, Express and MongoDB.
                </p>

                {/* BUTTONS */}
                <div className="hero-buttons">

                    <a
                        href="#projects"
                        className="primary-btn"
                    >
                        <FaEye />
                        View My Work
                    </a>
                    <a
                        href="/Aquib-Rizvi-Resume.pdf"
                        download="Aquib-Rizvi-Resume.pdf"
                        className="secondary-btn"
                    >
                        <FaDownload />
                        Download Resume
                    </a>

                </div>

                {/* SOCIAL ICONS */}
                <div className="social-icons">

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="#contact">
                        <FaEnvelope />
                    </a>

                </div>

            </motion.div>

{/* RIGHT SIDE PROFILE CIRCLE */}

{/* RIGHT SIDE PROFILE CIRCLE */}

<motion.div
    className="hero-image"
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
>
    <div className="profile-wrapper">

        <div className="profile-ring"></div>

        <div className="profile-circle">

            <img
                src="/aquib.jpeg"
                alt="Aquib Rizvi"
                className="profile-image"
            />

        </div>

    </div>
</motion.div>


            {/* SCROLL ICON */}
            <a
                href="#about"
                className="scroll-down"
            >
                <FaArrowDown />
            </a>

        </section>
    );
}

export default Hero;