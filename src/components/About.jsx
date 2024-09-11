import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { motion } from "framer-motion";

const About = () => {

  return (
    <div id="about" className="about">
      <div className="about-main">
        <p>INTRODUCTION</p>
        <h1>Overview.</h1>
        <p>
          I'm a skilled software developer with experience in JavaScript, and
          expertise in frameworks like React, Angular and Node js. I'm a quick learner
          and collaborate closely with clients to create efficient, scalable,
          and user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </p>
        <div>
          {services.map((service,i) => (
            <motion.div
              key={service.id}
              initial={{ opacity:0 , scale:0 , rotateZ:270 }}
              whileInView={{ opacity:1 ,scale:1 , rotateZ:360 }}
              transition={{duration:.75 , delay : i*.3}}
              viewport={{ once: true }}
            >
              <Tilt className="tilt" style={{ height: 215, width: 185 }}>
                <img src={service.icon} alt="" />
                <div>{service.title}</div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
