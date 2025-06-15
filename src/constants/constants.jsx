import machinesPG from "../assets/img/machines.png";
import minervaPG from "../assets/img/minerva.png";
import trekbag from "../assets/img/trekbag.png";
export const HERO_CONTENT = `I’m a fullstack developer passionate about building modern, scalable web applications using the MERN stack. With a strong foundation in React, Next.js, Node.js, and MongoDB, I focus on writing clean code and crafting smooth user experiences. I'm constantly exploring new technologies and best practices to grow as a developer and bring fresh ideas into every project.`;
export const ABOUT_TEXT = `I am an enthusiastic and motivated fullstack developer specializing in the MERN stack. I enjoy creating modern, efficient, and user-friendly web applications, using technologies like React, Next.js, Node.js, and MongoDB. My journey in web development started from a passion for learning how things work, and I’m driven by the desire to improve, explore new technologies, and tackle real-world challenges. I thrive in collaborative teams and love turning ideas into high-quality solutions. Outside of coding, I enjoy staying active and experimenting with new tools and frameworks to grow as a developer.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Fullstack Developer",
    company: "Minerva",
    description: `Contributed to the development and improvement of web applications using React, Next.js, and Tailwind CSS. Integrated frontend components with backend APIs, optimized performance, and enhanced user experience as part of an Agile team.`,
    technologies: ["React", "Next.js", "Node.js", "AWS", "Tailwind CSS"],
  },
  {
    year: "2024",
    role: "Fullstack Developer",
    company: "H.M.T.S",
    description: `Developed a machinery management system to streamline manufacturing workflows and improve production data visualization. Built using Next.js, MongoDB, and Next.js built-in servers, addressing performance and data challenges with tailored solutions.`,
    technologies: [
      "Next.js",
      "MongoDB",
      "Next.js built-in servers ",
      "Tailwind CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "MinervaXR Website",
    image: minervaPG,
    url: "https://www.minervaxr.com",
    description:
      "Official company website built with Next.js and Tailwind CSS, featuring a modern landing page and internal pages designed to enhance user experience and digital presence.",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "AWS"],
  },

  {
    title: "Machines Factory Management System",
    image: machinesPG, // או נתיב לתמונה אם יש לך תמונה לשים
    url: "https://machines-factory.vercel.app/", // שים את ה-URL האמיתי אם קיים
    description:
      "A machinery management system designed to streamline manufacturing workflows and visualize production data. Built with Next.js, MongoDB, and Next.js built-in servers, delivering tailored solutions for performance and data management challenges.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Next.js built-in servers",
      "Tailwind CSS",
    ],
  },
  {
    title: "trekbag website",
    image: trekbag,
    url: "https://trekbag-davidn.vercel.app/",
    description:
      "A personal website expiriment using React, Tailwind CSS, and Zustand for state management.",
    technologies: ["HTML", "CSS", "React", "zustand"],
  },
];

export const CONTACT = {
  address: "Ben Gurion, Israel",
  phoneNo: "0525691792 ",
  email: "123abadodi@gmail.com",
};
