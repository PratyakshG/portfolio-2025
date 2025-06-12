"use client";

import { easeIn, motion } from "motion/react";
import { skills } from "../../constants";

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      easeIn,
    },
  }),
};

const hover = {
  backgroundColor: "#f0f0f0",
  color: "black",
  transition: {
    duration: 0.5,
  },
};

const Skills = () => {
  const progLang = ["C", "C++", "JavaScript", "TypeScript"];
  const frontend = ["HTML", "CSS", " React", "NextJS", "TailwindCSS", "SCSS"];
  const backend = ["NodeJS", "ExpressJS", "API", "MongoDB", "Firebase"];
  const extra = [
    "Framer-motion",
    "Git",
    "Github",
    "Problem-Solving",
    "Singing, Sketching, Gaming",
  ];

  // map using ul and li for each array and create separate cards for each

  return (
    <motion.div className="flex flex-wrap items-baseline justify-center p-5 md:p-10 h-full w-full gap-5">
      {skills.map((item, index) => (
        <ul
          key={index}
          className="flex"
        >
          <motion.li
            variants={variants}
            initial="initial"
            whileHover={hover}
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
            className="flex items-center border md:border-none border-gray-500 md:border-t md:border-b justify-center p-2 md:p-3 xl:p-4 gap-2 lg:gap-5 text-base md:text-lg lg:text-2xl"
          >
            <item.icon />
            <span className="font-[poppins] text-xs md:text-base xl:text-lg">
              {item.skill}
            </span>
          </motion.li>
        </ul>
      ))}
    </motion.div>
  );
};

export default Skills;
