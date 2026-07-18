import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase
} from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    level: "90%"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: "85%"
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: "80%"
  },
  {
    name: "React.js",
    icon: <FaReact />,
    level: "85%"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: "75%"
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    level: "75%"
  }
];

function Skills() {
  return (
    <section id="skills" className="section">

      <p className="section-subtitle">
        My Expertise
      </p>

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level }}
              ></div>
            </div>

            <p>{skill.level}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;