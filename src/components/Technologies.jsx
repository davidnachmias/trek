import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import {
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

const initialOrder = [
  { id: "react", icon: <RiReactjsFill className="text-7xl text-cyan-400" /> },
  { id: "next", icon: <RiNextjsFill className="text-7xl" /> },
  { id: "mongo", icon: <BiLogoMongodb className="text-7xl text-green-600" /> },
  { id: "node", icon: <FaNodeJs className="text-7xl text-green-500" /> },
  { id: "tailwind", icon: <SiTailwindcss className="text-7xl text-sky-400" /> },
  { id: "ts", icon: <SiTypescript className="text-7xl text-blue-600" /> },
  { id: "git", icon: <FaGitAlt className="text-7xl text-orange-500" /> },
  {
    id: "github",
    icon: (
      <FaGithub className="text-7xl text-white bg-black rounded-full p-1" />
    ),
  },
  { id: "express", icon: <SiExpress className="text-7xl text-gray-700" /> },
  { id: "js", icon: <SiJavascript className="text-7xl text-yellow-400" /> },
  { id: "html", icon: <FaHtml5 className="text-7xl text-orange-600" /> },
  { id: "css", icon: <FaCss3Alt className="text-7xl text-blue-500" /> },
];

export default function TechnologiesReordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <div className="border-b border-neutral-400 pb-4">
      <div className="my-20 flex flex-col items-center justify-center">
        <ul style={container}>
          {order.map((tech) => (
            <motion.li key={tech.id} layout transition={spring} style={item}>
              {tech.icon}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Shuffle util
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Animation spring config
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

// Styles for container and item
const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
  width: 700,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const item = {
  width: 100,
  height: 100,
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
