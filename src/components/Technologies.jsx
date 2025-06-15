import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { div } from "framer-motion/client";

const initialOrder = [
  { id: "react", icon: <RiReactjsFill className="text-7xl text-cyan-400" /> },
  { id: "next", icon: <RiNextjsFill className="text-7xl" /> },
  { id: "mongo", icon: <BiLogoMongodb className="text-7xl text-green-600" /> },
  { id: "node", icon: <FaNodeJs className="text-7xl text-green-500" /> },
];

export default function TechnologiesReordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <div className="border-b border-neutral-400  pb-4">
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

/**
 * Utils
 */
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Styles
 */
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
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
