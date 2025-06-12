"use client";
import { motion, easeIn } from "motion/react";

const dateVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 1,
      easeIn,
      staggerChildren: 0.5,
    },
  },
};

var date = new Date();

const ScrollText = () => {
  return (
    <div className="flex w-full items-center justify-center uppercase py-2 md:py-5 px-3 md:px-5 xl:px-10 bg-dark-2 rounded-3xl">
      <motion.div className="flex w-full flex-col text-[4.5dvw] md:text-[3dvw] whitespace-nowrap">
        {list.map((item, index) => (
          <motion.ul
            key={index}
            className="odd:text-red-500 text-light text-right"
            // initial={{
            //   opacity: 0,
            //   y: 100,
            // }}
            // whileInView={{
            //   opacity: 1,
            //   y: 0,
            //   transition: {
            //     when: "beforeChildren",
            //     easeIn,
            //     delay: 0.1 * index,
            //   },
            // }}
            // viewport={{
            //   once: true,
            // }}
          >
            <motion.li
              initial={{
                rotateX: -90,
                translateY: 90,
              }}
              whileInView={{
                rotateX: 0,
                translateY: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.2 * index,
                },
              }}
              viewport={{
                once: true,
              }}
              className="py-2 md:py-2 font-delaGothic font-bold tracking-wider leading-none"
            >
              {item}
            </motion.li>
          </motion.ul>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollText;

const list = ["Frontend Developer", "UI/UX Designer", "Photographer", "Artist"];
