import { ABOUT_TEXT } from "../constants/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-400 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        about me
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center"
          >
            <p className="my-6 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
