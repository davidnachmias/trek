import { ABOUT_TEXT } from "../constants/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-400 pb-4">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} // ✅ אנימציה רק פעם אחת
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-pink-300 "
      >
        about me
      </motion.h2>

      <div className="flex flex-wrap">
        <div className="w-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} // ✅ גם כאן רק פעם אחת
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
