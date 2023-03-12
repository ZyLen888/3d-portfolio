import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center h-full"
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Thank you for visiting.❤️
        </h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Footer, "");
