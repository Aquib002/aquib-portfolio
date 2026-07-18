import { useState } from "react";

import axios from "axios";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");


  const handleChange = (event) => {

    setFormData({

      ...formData,

      [event.target.name]:
        event.target.value,

    });

  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);

    setStatus("");


    try {

      const response = await axios.post(

        "http://localhost:8000/api/contact",

        formData

      );


      setStatus(
        response.data.message
      );


      setFormData({

        name: "",

        email: "",

        subject: "",

        message: "",

      });


    } catch (error) {

      console.log(
        "Contact Form Error:",
        error
      );


      setStatus(

        error.response?.data?.message ||

        "Something went wrong. Please try again."

      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <section
      id="contact"
      className="section contact"
    >

      <p className="section-subtitle">
        Get In Touch
      </p>


      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>


      <div className="contact-container">


        {/* CONTACT INFORMATION */}

        <div className="contact-info">


          <div className="contact-item">

            <FaEnvelope />

            <div>

              <h3>Email</h3>

              <p>
                aquibrizvi13@gmail.com
              </p>

            </div>

          </div>


          <div className="contact-item">

            <FaPhone />

            <div>

              <h3>Phone</h3>

              <p>
                7771995448
              </p>

            </div>

          </div>


          <div className="contact-item">

            <FaMapMarkerAlt />

            <div>

              <h3>Location</h3>

              <p>
                Indore, Madhya Pradesh
              </p>

            </div>

          </div>


        {/* SOCIAL ICONS */}

<div className="social-icons">

  {/* GITHUB */}
  <a
    href="https://github.com/Aquib002"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>


  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/aquib-rizvi-7b3a3a306"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>


  {/* EMAIL */}
  <a
    href="mailto:aquibrizvi13@gmail.com"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>

</div>

        </div>


        {/* CONTACT FORM */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />


          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>


          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? "Sending..."
              : "Send Message"}

          </button>


          {status && (

            <p className="form-status">
              {status}
            </p>

          )}

        </form>

      </div>

    </section>

  );

}


export default Contact;