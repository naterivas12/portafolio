import {
    mobile,
    backend,
    creator,
    web,
    
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    starbucks,
    angular,
    pwa,
    material,
    rxjs,
    docker,
    figma,
    tailwind,
    
    netflix,
    socialmedia,
    ecommerce,

    handel,
    luxury,
    seller,
    gify,
  
  } from "../assets/index";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      id:1,
      title: "Web Developer",
      icon: web,
    },
    {
      id:2,
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      id:3,
      title: "Backend Developer",
      icon: backend,
    },
    {
      id:4,
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "RxJs",
      icon: rxjs,
    },
    {
      name: "PWA",
      icon: pwa,
    },
    {
      name: "Material",
      icon: material,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "git",
      icon: git,
    },
  
  ];
  
  const experiences = [
   
    {
      id:1,
      title: "Full Stack Developer",
      company_name: "Delfosti",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2022 - September 2023",
      points: [
        "Making changes and improvements to login, registration, password recovery, and shopping cart functions in the LuxuryClub project, ensuring an enhanced and secure user experience.",
        "Ongoing maintenance of the Handel administration page, implementing updates, resolving issues, and improving efficiency.",
        "Creating a highly functional intranet using cutting-edge technologies like Bootstrap and Angular Material.",
        "Implementing advanced Angular concepts, including the use of pipes, guards, and signals for better data management and security."
      ],
    },
    {
      id:2,
      title: "Mechatronic technician and software development",
      company_name: "UyM",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2018 - October 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "IOT medical equipment maintenance using Raspberry and other technologies",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      id:3,
      title: "Mechatronic technician",
      company_name: "Montanara",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2019",
      points: [
        "Analysis and design of a control system for a drying oven room.",
        "Assembly and implementation of the control panel, including the installation of PLCs 71200 and necessary connections for operation.",
        "Programming and development of the control system using ladder language, ensuring drying process efficiency and safety.",
        "Leadership in the reconstruction of an outdated pasta mixer machine, modernizing it through the implementation of programmable logic controllers (PLCs).",
        "Design and programming of logic circuits to automate and control the pasta mixing process precisely and efficiently.",
        "Integration of safety systems and fault detection to ensure safe operation.",
      ],
    },
    {
      id:4,
      title: "Informatic technician",
      company_name: "CyberMach",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2011 - December 2013",
      points: [
        "Sales system maintenance in Java and MySQL.",
        "Assembly and maintenance of computers and laptops.",
        "Installation of software for computer equipment.",
        "Design and restructuring of networks.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      id:1,
      name: "Handel",
      description:
        "Web-App dedicated to handling income and managing the Luxury e-commerce platform.",
      tags: [
        {
          name: "Angular",
          color: "#FB0000",
        },
        {
          name: "Mongodb",
          color: "#5D9C59",
        },
        {
          name: "Material",
          color: "#E384FF",
        },
      ],
      image: handel,
      source_code_link: "https://sr-admin-qa.delfosti.site/public/login",
    },
    {
      id:2,
      name: "LuxuryClub",
      description:
        "LuxuryClub is an exclusive online platform where individuals and businesses can seamlessly list and sell an exquisite array of luxury products and items.",
      tags: [
        {
          name: "Angular",
          color: "#FB0000",
        },
        {
          name: "Mongodb",
          color: "#5D9C59",
        },
        {
          name: "Bootstrap",
          color: "#E384FF",
        },
      ],
      image: luxury,
      source_code_link: "https://luxuryclub.pe/inicio",
    },
    {
      id:3,
      name: "Intranet",
      description:
        "Website designed for users to make restaurant reservations and access other unique experiences.",
      tags: [
        {
          name: "Angular",
          color: "#FB0000",
        },
        {
          name: "Mongodb",
          color: "#5D9C59",
        },
        {
          name: "sass",
          color: "#E384FF",
        },
      ],
      image: seller,
      source_code_link: "https://sr-seller-test.delfosti.site/login",
    },
    {
      id:4,
      name: "GifY",
      description:
        "A website where you can search for GIFs of your choice.",
      tags: [
        {
          name: "React",
          color: "#6C9BCF",
        },
        {
          name: "Mongodb",
          color: "#5D9C59",
        },
        {
          name: "sass",
          color: "#E384FF",
        },
      ],
      image: gify,
      source_code_link: "https://kissmarkrivas.github.io/react-gift",
    },
  
  ];
  
  export { services, technologies, experiences, testimonials, projects };