import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a skilled junior MERN stack developer with a passion for building efficient, user-friendly, and visually appealing web applications. With expertise in React.js, JavaScript, and modern frontend technologies like Tailwind CSS, I crafts dynamic and responsive user interfaces that provide seamless user experiences. His backend proficiency includes Node.js, Express.js, and database management with MongoDB and MySQL, ensuring robust and scalable server-side solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "09/2024-12/2024",
    role: "INTERN / Web Application (React JS)",
    company: "Netkathir Technologies.",
    description: `Built a user-friendly, responsive interface using React.js and Tailwind CSS, ensuring compatibility across devices and a clean design with Ant Design components. Developed backend endpoints with Node.js and Express.js, used MongoDB for data handling, and tested APIs with Postman for smooth frontend-backend integration.`,
    technologies: [ "React.js", "Next.js", "mongoDB", "Express.js"],
  },
  {
    year: "09/2023-10/2023  ",
    role: "IT Techinical Support",
    company: "Integra Software Services Pvt. Ltd.",
    description: `Monitored network performance and quickly identified and troubleshooted outages to prevent any disruption in 500 workstations. Supported auditing of IT operations to ensure 100% consistency in the quality of services.`,
    technologies: ["HTML", "CSS", "Networking"],
  },
];

export const PROJECTS = [
  
  {
    title: "YOMIZO",
    image: project2,
    description:
      "Built a comprehensive ads posting platform with user-friendly functionality for posting, editing, viewing, and deleting ads.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Counterfeit product detection using Blockchain Technology",
    image: project1,
    description:
      "Enhanced a Full stack / web application using HTML, CSS, JavaScript, SCSS, Solidity. The contracts for the manufacturer and supplier block are written using Solidity. The end used can verify the product QR code using web application .",
    technologies: ["HTML", "CSS", "JavaScript", "SCSS", "Solidity"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

];

export const CONTACT = {
  address: "No-516, vazhuthavoor Main road, Muthirayarpalayam , Puducherry-605 009",
  phoneNo: "9092661137",
  email: "pradeep.nagavelu@gmail.com",
};
