import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      description:
        "A modern, responsive and interactive personal portfolio website designed to showcase my skills, education, projects and professional journey.",
      tech:
        "React.js • JavaScript • Framer Motion • CSS • Responsive Design",
      github: "https://github.com/",
      live: "#",
    },

    {
      number: "02",
      title: "RapidReach",
      description:
        "A full-stack e-commerce web application with product browsing, authentication, cart management, order placement and online payment integration.",
      tech:
        "React.js • Redux • Node.js • Express.js • MongoDB • Razorpay",
      github: "https://github.com/",
      live: "#",
    },

    {
      number: "03",
      title: "Rhyno EV",
      description:
        "A modern electric vehicle website designed with a premium user interface to showcase electric scooters, products and a smooth user experience.",
      tech:
        "React.js • JavaScript • HTML • CSS • Bootstrap",
      github: "https://github.com/",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="section projects-section"
    >

      <p className="section-subtitle">
        MY WORK
      </p>

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>


      <div className="projects-container">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={project.number}

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}

            viewport={{
              once: true,
            }}
          >

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live Project"
                >
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>


            <h3>
              {project.title}
            </h3>


            <p>
              {project.description}
            </p>


            <small>
              {project.tech}
            </small>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;