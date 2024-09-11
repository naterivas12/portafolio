import { motion } from "framer-motion";
import React from "react";
import { projects } from "../constants";
import { github } from "../assets";


const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-main">
        <p>PORTFOLIO</p>
        <h1>Projects.</h1>
        <p>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects the ability
          to solve complex problems, work with different technologies, and
          manage projects effectively.
        </p>
        <div>
           {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0, x:-100}}
              whileInView={{ opacity: 1, scale: 1,x:0}}
              transition={{ duration: 0.75, delay: i * 0.3 }}
              viewport={{ once: true }}
            >
                <a href={project.source_code_link} target="_blank" rel="noreferrer" ><img src={github} alt="" /></a>
                <img src={project.image} alt="" />
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div>{project.tags.map(tag => <span key={tag.name} style={{color:tag.color}} >#{tag.name}</span> )}</div>
            </motion.div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
