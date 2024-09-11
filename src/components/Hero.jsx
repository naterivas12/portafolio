import React from "react";
import dp from "../assets/DP.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div>
          <motion.div
            initial={{ y: -1500 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", delay: 1 }}
          >
            <div></div>
            <div></div>
          </motion.div>
          <div>
            <h1>
              Hi, I'm <span>Kissmark</span>
            </h1>
            <p>I develop Web Applications, User Interface and Animations</p>
          </div>
        </div>
      </motion.div>
      <div className="hero-image">
        <motion.img
          src={dp}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <a href="#about" className="hero-scroll">
        <motion.div
          initial={{ y: 4 }}
          animate={{ y: 27 }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
      </a>
    </section>
  );
};

export default Hero;
