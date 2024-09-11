import { motion } from "framer-motion";
import React, { useState } from "react";
import { EarthCanvas, StarsCanvas } from "./canvas";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
     console.log(name,email,message)
      await emailjs.send(
        "service_7z32m8o",
       "template_catokki",
        {
          from_name: name,
          to_name: "Kissmark",
          from_email: email,
          to_email: "rivaskissmark@gmail.com",
          message: message,
        },
        "Hip9rt__w7yvY6Brx"
       
      );

      setLoading(false);
      alert("Thank You");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <StarsCanvas className="stars" />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", delay: 0.25, duration: 0.75 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <p>GET IN TOUCH</p>
            <h1>Contact.</h1>
          </div>
          <div className="field">
            <span>Your Name</span>
            <input
              type="text"
              placeholder="What's your name?"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <span>Your Email</span>
            <input
              type="email"
              placeholder="What's your email?"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <span>Your Message</span>
            <textarea
              type="text"
              placeholder="What do you want to say?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y:-100 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", delay: 0.3, duration: 0.75 }}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
