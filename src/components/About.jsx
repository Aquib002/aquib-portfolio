import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section about">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <p className="section-subtitle">
          Get To Know Me
        </p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <p className="about-text">
          I am a passionate Full Stack Developer with a strong interest
          in creating modern and interactive web applications. I have
          completed my BCA from Medicaps University, Indore.
        </p>

        <p className="about-text">
          My main focus is building responsive user interfaces and
          powerful backend applications using the MERN stack.
        </p>

        <div className="about-stats">

          <div>
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Passion</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;