import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="section experience">

      <p className="section-subtitle">
        My Journey
      </p>

      <h2 className="section-title">
        My <span>Experience</span>
      </h2>

      <div className="experience-container">

        <motion.div
          className="experience-card"
          initial={{
            opacity: 0,
            y: 80
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          viewport={{
            once: true
          }}
        >

          <div className="experience-icon">
            <FaCode />
          </div>

          <div className="experience-content">

            <span className="experience-status">
              Current Focus
            </span>

            <h3>
              Full Stack Web Development
            </h3>

            <h4>
              MERN Stack Developer
            </h4>

            <p>
              Currently focusing on building full-stack web applications
              using React.js, Node.js, Express.js and MongoDB. I am
              continuously improving my skills by working on real-world
              projects and learning modern web development technologies.
            </p>

            <div className="experience-tech">
              React.js • Node.js • Express.js • MongoDB • Redux
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;