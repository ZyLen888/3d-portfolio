import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-darkergreen-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-25 h-25 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        <h2 className="font-bold text-white text-[20px] underline">Who I am</h2>
        <p>
          I am a penultimate year computer science student with a passion for
          <span className="font-bold"> software development</span>,
          <span className="font-bold"> artificial intelligence</span> and
          <span className="font-bold"> cloud services</span> .
        </p>
        <h2 className="font-bold text-white text-[20px] underline">What do I know</h2>
        <p>
          As an enthusiastic and adaptable learner, I possess practical knowledge in a
          variety of programming languages including{" "}
          <span className="font-bold">Java</span>,{" "}
          <span className="font-bold">Python</span>,{" "}
          <span className="font-bold">React</span>,{" "}
          <span className="font-bold">JavaScript</span>,{" "}
          <span className="font-bold">TypeScript</span>,
          <span className="font-bold">C#</span>, and <span className="font-bold">C</span>.
        </p>
        <p>
          My strong passion for data analytics, and cloud services has also led me to
          develop competent knowledge in{" "}
          <span className="font-bold">data analytics skills</span> and{" "}
          <span className="font-bold">AWS cloud services</span>.
        </p>
        <h2 className="font-bold text-white text-[20px] underline">
          What I am doing now
        </h2>
        <p>
          Currently, I am focused on developing my skills in web development using
          JavaScript, TypeScript and React for a Start-up Competition Project.
          <br />I am also looking forward to explore the exciting world of AI with BioTech
          projects in the near future.
        </p>
        <br />
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
