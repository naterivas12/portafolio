import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, technologies } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";



const VerticalCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    key={experience.id}
      contentStyle={{
        background: "linear-gradient(180deg,black, #4e3486, black)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={experience.date}
      iconStyle={{ background: "rgb(5, 5, 22)", color: "#fff" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }} >
        <h3>{experience.title}</h3>
        <p
          style={{
            color: "rgb(182, 181, 181)",
            marginTop: "-.1rem",
            marginBottom: ".75rem",
          }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul style={{ fontSize: ".85rem", color: "rgb(248, 236, 236)" }}>
        {experience.points.map((point,i) => (
          <li key={i} >{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Works = () => {
  return (
    <div id="work" className="work">
      <div className="work-main">
        <h1>Work Experience.</h1>
        <div>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalCard key={experience.id} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
        <div>
          {technologies.map((technology,i) => (
            <motion.div key={i}  initial={{  scale: 0, y:-80 , x: i%2===0 ? 120 : -120 }}
             whileInView={{  scale: 1, y:0 , x:0 }}
              transition={{ duration: 0.75, delay: i * 0.05 }}
              viewport={{ once: true }}>
            <img
              src={technology.icon}
              alt=""
            />
            <motion.span  whileHover={{scale:1.15}} transition={{type:"spring" , stiffness:250}} >{technology.name}</motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
