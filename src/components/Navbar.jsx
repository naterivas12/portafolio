import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { motion } from "framer-motion";


const Navbar = () => {

  const [toggle, setToggle] = useState(false);


  return (
    <nav>
      <motion.div animate={{rotateY :360}} transition={{type:'tween' , delay:1 , duration:.5 }} >
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.img src={logo} alt=""  whileHover={{scale:1.2}} transition={{type:'spring' , stiffness:600}} />
        </Link>
        <span>Kissmark | Web Developer</span>
      </motion.div>
      <div>
        {navLinks.map((link) => (
          <motion.a whileHover={{scaleX:1.15}} transition={{type:'spring', stiffness:250}}
            key={link.id}
            href={`#${link.id}`}
            className="pr"
          >
            {link.title}
          </motion.a>
        ))}
      </div>
      <div>
        <img
          className="burger-menu"
          src={toggle ? close : menu}
          alt=""
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && <div>
          {navLinks.map((link) => (
          <motion.a whileHover={{scaleX:1.15, originX:0}} transition={{type:'spring', stiffness:250}}
            key={link.id}
            href={`#${link.id}`}
            onClick={() =>{ setToggle(!toggle)}}
            className="pr"
          >
            {link.title}
          </motion.a>
        ))}
        </div>}
    </nav>
  );
};

export default Navbar;
