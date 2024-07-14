import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React.js , as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React,Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.` ;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelancer",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with clients to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js","Express.js" , "mongoDB", "GitHub" , "Node.js"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "AnkHub Technology Services",
    description: `Designed and developed user interfaces for web applications using  React.js. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS","JavaScript", "React.js" , "Trello" , "GitHub"],
  }
];

export const PROJECTS = [
  {
    title: "Food Blog Website",
    image: project1,
    gitHub:"https://github.com/tanmay250501/Food-bloog-website",
    link: "https://food-bloog-website-live.vercel.app/",
    description:
      "A fully functional Food Blog  website with features like Dishes Recepie listing, Serach Feature, and admin authentication for adding new recipies , deleting old recepies , updating recipie or creating diffrent categories.",
    technologies: ["HTML", "CSS","Tailwind CSS", "React", "Node.js","Express.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    gitHub:"https://github.com/tanmay250501/React-Portfolio",
    link: "https://tanmay-sawwalakhe-portfolio.vercel.app/",
    description:
      "Explore my portfolio crafted with HTML, CSS, and Tailwind CSS for stunning design, powered by React.js for dynamic interactivity. Integrated with EmailJS for seamless contact forms, Framer Motion for smooth animations, and React-Toast for user-friendly notifications.",
    technologies: ["HTML","Tailwind.CSS", "React.js", "EmailJS" , "Framer-Motion" , "React-Toast" ],
  },
  {
    title: "Calculator",
    image: project3,
    gitHub:"https://github.com/tanmay250501/Calculator-in-JS",
    link: "https://tanmay250501.github.io/Calculator-in-JS/",
    description:
      "A Calculator which show my strong command on JavaScript",
    technologies: ["HTML", "CSS", "JavaScript", ],
  }
  
];


